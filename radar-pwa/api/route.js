export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "POST required" });

  try {
    const body = req.body;
    const formData = new URLSearchParams({
      fromLatitude: body.fromLatitude || "",
      fromLongitude: body.fromLongitude || "",
      toLatitude: body.toLatitude || "",
      toLongitude: body.toLongitude || "",
      fromDistrictId: body.fromDistrictId || "0",
      toDistrictId: body.toDistrictId || "0",
    });

    const resp = await fetch("https://icisleri.gov.tr/ISAYWebPart/PolGenControlPointV2/CreateRoute", {
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
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.status(200).send(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
