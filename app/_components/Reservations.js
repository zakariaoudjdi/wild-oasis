import { getBookedDatesByCabinId, getSettings } from "@/app/_lib/data-service";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";
export default async function Reservations({ cabin }) {
  const [settings, bookedDates] = await Promise.all([
    getBookedDatesByCabinId(cabin.id),
    getSettings(),
  ]);
  return (
    <div className="mt-4 grid grid-cols-1 border border-zinc-600 px-6 py-10 md:grid-cols-2">
      <DateSelector
        settings={settings}
        bookedDate={bookedDates}
        cabin={cabin}
      />
      <ReservationForm cabin={cabin} />
    </div>
  );
}
