const FPT_KEY = 'r8GHIiDHgtrf1mnaCnZL4l5VHK1GJ2rl';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // TTS proxy — gọi FPT.AI server-side, không bị CORS
    if (url.pathname === '/api/tts' && request.method === 'POST') {
      return handleTTS(request);
    }

    // Serve static assets; fallback to index.html cho SPA routing
    const asset = await env.ASSETS.fetch(request);
    if (asset.status !== 404) return asset;
    return env.ASSETS.fetch(new Request(new URL('/index.html', url.origin)));
  },
};

async function handleTTS(request) {
  try {
    const { text } = await request.json();
    if (!text || typeof text !== 'string') {
      return resp({ error: 1, message: 'Missing text' }, 400);
    }

    const ttsRes = await fetch('https://api.fpt.ai/hmi/tts/v5', {
      method: 'POST',
      headers: {
        'api-key': FPT_KEY,
        'voice': 'linhsan',
        'speed': '0',
        'prosody': '0',
      },
      body: text,
    });

    const raw = await ttsRes.text();
    let data;
    try { data = JSON.parse(raw); }
    catch { return resp({ error: 1, message: `FPT.AI non-JSON: ${raw.slice(0, 200)}` }, 502); }

    const ok = data.error === 0 || data.error === '0';
    const audioUrl = data.async || data.url || data.mp3 || data.link;

    if (!ok || !audioUrl) {
      return resp({ error: 1, message: `FPT.AI: ${raw.slice(0, 300)}` }, 502);
    }

    // Stream audio binary — không CORS phía client
    const audioRes = await fetch(audioUrl);
    return new Response(audioRes.body, {
      headers: {
        'Content-Type': 'audio/mpeg',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (e) {
    return resp({ error: 1, message: e.message }, 500);
  }
}

function resp(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
