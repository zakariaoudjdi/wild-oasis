import DateSelector from "@/app/_components/DateSelector";
import ReservationForm from "@/app/_components/ReservationForm";
import TextExpander from "@/app/_components/TextExpander";
import {
  getBookedDatesByCabinId,
  getCabin,
  getCabins,
  getSettings,
} from "@/app/_lib/data-service";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

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

export const revalidate = 60; // Revalidate every 60 seconds

export async function generateMetadata({ params }) {
  const { cabinid: cabinId } = await params;
  const cabin = await getCabin(cabinId);
  // const settings = await getSettings();
  // const bookedDates = await getBookedDatesByCabinId(cabinId);
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
  const { name, maxCapacity, description, image } = cabin;

  return (
    <div className="mx-auto mt-8 max-w-6xl">
      <div className="mb-24 grid grid-cols-[3fr_4fr] gap-20 border border-zinc-800 px-10 py-3">
        <div className="relative -translate-x-3 scale-[1.15]">
          <Image
            src={image}
            quality={60}
            className="object-cover object-center"
            fill
            alt={`Cabin ${name}`}
          />
        </div>

        <div>
          <h3 className="mb-5 w-[150%] translate-x-[-254px] bg-zinc-950 p-6 pb-1 text-7xl font-black text-yellow-100">
            Cabin {name}
          </h3>

          <p className="mb-10 text-lg text-zinc-300">
            <TextExpander>{description}</TextExpander>
          </p>

          <ul className="mb-7 flex flex-col gap-4">
            <li className="flex items-center gap-3">
              <UsersIcon className="text-primary-600 h-5 w-5" />
              <span className="text-lg">
                For up to <span className="font-bold">{maxCapacity.max}</span>{" "}
                guests
              </span>
            </li>
            <li className="flex items-center gap-3">
              <MapPinIcon className="h-5 w-5 text-zinc-600" />
              <span className="text-lg">
                Located in the heart of the{" "}
                <span className="font-bold">Dolomites</span> (Italy)
              </span>
            </li>
            <li className="flex items-center gap-3">
              <EyeSlashIcon className="h-5 w-5 text-zinc-600" />
              <span className="text-lg">
                Privacy <span className="font-bold">100%</span> guaranteed
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-center text-5xl font-semibold">
          Reserve today. Pay on arrival.
        </h2>
      </div>
      <div className="mt-4 grid grid-cols-1 border border-zinc-600 px-6 py-10 md:grid-cols-2">
        <DateSelector />
        <ReservationForm />
      </div>
    </div>
  );
}
