const FPT_KEY = 'r8GHIiDHgtrf1mnaCnZL4l5VHK1GJ2rl';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/tts' && request.method === 'POST') {
      return handleTTS(request);
    }

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

    // FPT.AI xử lý bất đồng bộ — poll đến khi file MP3 sẵn sàng
    const audioRes = await pollAudio(audioUrl);
    if (!audioRes) {
      return resp({ error: 1, message: 'FPT.AI: audio chưa sẵn sàng sau 12 giây' }, 502);
    }

    const buf = await audioRes.arrayBuffer();
    return new Response(buf, {
      headers: {
        'Content-Type': 'audio/mpeg',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (e) {
    return resp({ error: 1, message: e.message }, 500);
  }
}

// Poll mỗi 1–2 giây, tối đa ~12 giây — file nhỏ thường ready trong 1–3s
async function pollAudio(url) {
  const delays = [1500, 1000, 1000, 1500, 1500, 2000, 2000];
  for (const delay of delays) {
    await new Promise(r => setTimeout(r, delay));
    try {
      const res = await fetch(url);
      if (!res.ok) continue;
      const ct = (res.headers.get('content-type') || '').toLowerCase();
      // Nếu server trả HTML/XML thì file chưa ready
      if (ct.startsWith('text/') || ct.includes('xml') || ct.includes('html')) continue;
      return res;
    } catch {}
  }
  return null;
}

function resp(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
