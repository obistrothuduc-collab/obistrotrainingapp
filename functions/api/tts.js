export async function onRequestPost(context) {
  try {
    const { text } = await context.request.json();
    if (!text || typeof text !== 'string' || text.length > 5000) {
      return json({ error: 1, message: 'Invalid text' }, 400);
    }

    // Call FPT.AI to get audio URL
    const ttsRes = await fetch('https://api.fpt.ai/hmi/tts/v5', {
      method: 'POST',
      headers: {
        'api-key': 'r8GHIiDHgtrf1mnaCnZL4l5VHK1GJ2rl',
        'voice': 'linhsan',
        'speed': '0',
        'prosody': '0',
      },
      body: text,
    });

    if (!ttsRes.ok) {
      return json({ error: 1, message: `FPT.AI HTTP ${ttsRes.status}` }, 502);
    }

    const ttsData = await ttsRes.json();

    if (ttsData.error !== 0 || !ttsData.async) {
      return json({ error: 1, message: ttsData.message || 'FPT.AI returned no audio URL' }, 502);
    }

    // Proxy the audio binary — eliminates all CORS issues on the client
    const audioRes = await fetch(ttsData.async);
    if (!audioRes.ok) {
      return json({ error: 1, message: `Audio fetch failed: ${audioRes.status}` }, 502);
    }

    const audioBuffer = await audioRes.arrayBuffer();
    return new Response(audioBuffer, {
      headers: {
        'Content-Type': 'audio/mpeg',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (e) {
    return json({ error: 1, message: e.message }, 500);
  }
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
