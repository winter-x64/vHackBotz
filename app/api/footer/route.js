export async function GET() {
  return new Response(
    JSON.stringify({
      message: "Designed & Developed by vHackBotz",
      link: "https://vhackbotz.vercel.app",
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    }
  );
}
