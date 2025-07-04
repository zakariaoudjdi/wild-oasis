import { auth } from "@/app/_lib/auth";
import { getBookedDatesByCabinId, getSettings } from "@/app/_lib/data-service";
import DateSelector from "./DateSelector";
import LoginMessage from "./LoginMessage";
import ReservationForm from "./ReservationForm";
export default async function Reservations({ cabin }) {
  const [settings, bookedDates] = await Promise.all([
    getBookedDatesByCabinId(cabin.id),
    getSettings(),
  ]);
  const session = await auth();
  return (
    <div className="mt-4 grid grid-cols-1 border border-zinc-600 px-6 py-10 md:grid-cols-2">
      <DateSelector
        settings={settings}
        bookedDate={bookedDates}
        cabin={cabin}
      />
      {session?.user ? <ReservationForm cabin={cabin} user={session.user} /> : <LoginMessage />}
    </div>
  );
}
