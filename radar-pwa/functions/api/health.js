export async function onRequest() {
  return new Response(JSON.stringify({ status: "ok", source: "icisleri.gov.tr" }), {
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
  });
}
