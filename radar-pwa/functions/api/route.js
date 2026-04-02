const ICISLERI_BASE = "https://icisleri.gov.tr/ISAYWebPart/PolGenControlPointV2";
const cors = { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "GET, POST, OPTIONS", "Access-Control-Allow-Headers": "Content-Type" };

export async function onRequest({ request }) {
  if (request.method === "OPTIONS") return new Response(null, { headers: cors });
  if (request.method !== "POST") return new Response(JSON.stringify({ error: "POST required" }), { status: 405, headers: { "Content-Type": "application/json", ...cors } });

  try {
    const body = await request.json();
    const formData = new URLSearchParams({
      fromLatitude: body.fromLatitude || "",
      fromLongitude: body.fromLongitude || "",
      toLatitude: body.toLatitude || "",
      toLongitude: body.toLongitude || "",
      fromDistrictId: body.fromDistrictId || "0",
      toDistrictId: body.toDistrictId || "0",
    });

    const resp = await fetch(`${ICISLERI_BASE}/CreateRoute`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": "Mozilla/5.0",
        "Referer": "https://www.icisleri.gov.tr/iller-arasi-radar-ve-kontrol-noktasi-uygulama-sayilari",
        "Origin": "https://www.icisleri.gov.tr",
      },
      body: formData.toString(),
    });

    const data = await resp.text();
    return new Response(data, { status: resp.status, headers: { "Content-Type": "application/json; charset=utf-8", ...cors } });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500, headers: { "Content-Type": "application/json", ...cors } });
  }
}
