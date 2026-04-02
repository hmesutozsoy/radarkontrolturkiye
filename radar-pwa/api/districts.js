export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  if (req.method === "OPTIONS") return res.status(200).end();
  const cityId = req.query.cityId;
  if (!cityId) return res.status(400).json({ error: "cityId required" });
  try {
    const resp = await fetch(`https://icisleri.gov.tr/ISAYWebPart/PolGenControlPointV2/GetDistricts?cityId=${cityId}`, {
      headers: { "User-Agent": "Mozilla/5.0", "Referer": "https://www.icisleri.gov.tr/" }
    });
    const data = await resp.text();
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.status(200).send(data);
  } catch (e) {
    res.status(502).json({ error: e.message });
  }
}
