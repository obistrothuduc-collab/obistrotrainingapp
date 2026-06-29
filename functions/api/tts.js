export async function onRequestPost(context) {
  try {
    const { text } = await context.request.json();
    if (!text || typeof text !== 'string' || text.length > 5000) {
      return jsonResp({ error: 1, message: 'Invalid text' }, 400);
    }

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

    // Read raw text first — avoids silent JSON parse failures
    const rawText = await ttsRes.text();
    let ttsData;
    try {
      ttsData = JSON.parse(rawText);
    } catch {
      return jsonResp({ error: 1, message: `FPT.AI non-JSON (${ttsRes.status}): ${rawText.slice(0, 300)}` }, 502);
    }

    // error field can be number 0 or string "0"
    const isOk = ttsData.error === 0 || ttsData.error === '0';
    // Try all known field names for the audio URL
    const audioUrl = ttsData.async || ttsData.url || ttsData.mp3 || ttsData.link || ttsData.audio;

    if (!isOk || !audioUrl || typeof audioUrl !== 'string') {
      // Return the full raw response so we can read the actual format
      return jsonResp({ error: 1, message: `FPT.AI raw: ${rawText.slice(0, 500)}` }, 502);
    }

    // Proxy audio binary — eliminates all client-side CORS issues
    const audioRes = await fetch(audioUrl);
    if (!audioRes.ok) {
      return jsonResp({ error: 1, message: `Audio download failed ${audioRes.status} from ${audioUrl}` }, 502);
    }

    const buf = await audioRes.arrayBuffer();
    return new Response(buf, {
      headers: {
        'Content-Type': 'audio/mpeg',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (e) {
    return jsonResp({ error: 1, message: e.message }, 500);
  }
}

function jsonResp(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
