const ICISLERI_BASE = "https://icisleri.gov.tr/ISAYWebPart/PolGenControlPointV2";
const cors = { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "GET, OPTIONS", "Access-Control-Allow-Headers": "Content-Type" };

export async function onRequest({ request }) {
  if (request.method === "OPTIONS") return new Response(null, { headers: cors });
  try {
    const resp = await fetch(`${ICISLERI_BASE}/GetCities`, {
      headers: { "User-Agent": "Mozilla/5.0", "Referer": "https://www.icisleri.gov.tr/" }
    });
    const data = await resp.text();
    return new Response(data, { headers: { "Content-Type": "application/json; charset=utf-8", ...cors } });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), { status: 502, headers: { "Content-Type": "application/json", ...cors } });
  }
}
