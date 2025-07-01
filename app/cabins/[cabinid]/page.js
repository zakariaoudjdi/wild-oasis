import Cabin from "@/app/_components/Cabin";
import Reservations from "@/app/_components/Reservations";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import { Suspense } from "react";

// const cabin = {
//   id: 89,
//   name: "001",
//   maxCapacity: 2,
//   regularPrice: 250,
//   discount: 0,
//   description:
//     "Discover the ultimate luxury getaway for couples in the cozy wooden cabin 001. Nestled in a picturesque forest, this stunning cabin offers a secluded and intimate retreat. Inside, enjoy modern high-quality wood interiors, a comfortable seating area, a fireplace and a fully-equipped kitchen. The plush king-size bed, dressed in fine linens guarantees a peaceful nights sleep. Relax in the spa-like shower and unwind on the private deck with hot tub.",
//   image:
//     "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg",
// };

export async function generateMetadata({ params }) {
  const { cabinid: cabinId } = await params;
  const cabin = await getCabin(cabinId);

  return {
    title: `Cabin ${cabin.name} | The Wild Oasis`,
    description: cabin.description,
  };
}

export async function generateStaticParams() {
  const cabins = await getCabins();
  return cabins.map((cabin) => ({
    cabinid: cabin.id.toString(),
  }));
}

export default async function Page({ params }) {
  const { cabinid: cabinId } = await params;
  const cabin = await getCabin(cabinId);

  if (!cabin) {
    return <div className="mx-auto mt-8 max-w-6xl">Cabin not found</div>;
  }

  return (
    <div className="mx-auto mt-8 max-w-6xl">
      <Cabin cabin={cabin} />
      <div>
        <h2 className="text-center text-5xl font-semibold">
          Reserve today. Pay on arrival.
        </h2>
      </div>
      <Suspense fallback={<p>Loading reservations...</p>} key={cabinId}>
        <Reservations cabin={cabin} />
      </Suspense>
    </div>
  );
}
