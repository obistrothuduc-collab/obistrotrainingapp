export async function onRequestPost(context) {
  try {
    const { text } = await context.request.json();
    if (!text || typeof text !== 'string') {
      return new Response(JSON.stringify({ error: 1, message: 'Missing text' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const res = await fetch('https://api.fpt.ai/hmi/tts/v5', {
      method: 'POST',
      headers: {
        'api-key': 'r8GHIiDHgtrf1mnaCnZL4l5VHK1GJ2rl',
        'voice': 'linhsan',
        'speed': '0',
        'prosody': '0',
      },
      body: text,
    });

    const data = await res.json();
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: 1, message: e.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
