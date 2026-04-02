export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json({ status: "ok", source: "icisleri.gov.tr", runtime: "vercel" });
}
