import { Suspense } from "react";
import CabinList from "./CabinList";
import Filtter from "@/app/_components/Filtter";
import ReservationReminder from "../_components/ReservationReminder";

export const revalidate = 60; // Enables ISR (SSG with revalidation)

export const metadata = {
  title: "Cabins | Wild Oasis",
  description: "Explore our beautiful cabins in the wilderness",
};

export default async function CabinsPage({ searchParams }) {
  const capacity = await searchParams?.capacity ?? "all";
  return (
    <div>
      <h1 className="mb-5 text-4xl font-medium text-yellow-400">
        Our Luxury Cabins
      </h1>
      <p className="mb-10 text-lg">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy natures beauty in your own little home
        away from home. The perfect spot for a peaceful, calm vacation. Welcome
        to paradise.
      </p>
      <Filtter />
      <Suspense fallback={<p>Loading cabins...</p>} key={capacity}>
        <CabinList capacity={capacity} />
      </Suspense>
      <ReservationReminder/>
    </div>
  );
}
