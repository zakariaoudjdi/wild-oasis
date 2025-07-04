import { getCabin } from "@/app/_lib/data-service";
export async function GET(request, { params }) {
  const {cabinid} = await params;
  try {
    const cabin = await getCabin(cabinid);

    if (!cabin) {
      return new Response("Cabin not found", { status: 404 });
    }

    return new Response(JSON.stringify(cabin), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  }
  catch (error) {
    console.error("Error fetching cabin:", error);
    return new Response("Internal Server Error", { status: 500 });
  }

}
