import SubmitButton from "@/app/_components/SubmitButton";
import { updateReservation } from "@/app/_lib/actions";

export default async function Page({ params }) {
  const { editId: reservationId } = await params;
  const maxCapacity = 4; // This should ideally come from the cabin data, but for simplicity, we hardcode it here.
  return (
    <div>
      <h2 className="mb-7 text-2xl font-semibold text-yellow-400">
        Edit Reservation #{reservationId}
      </h2>

      <form
        action={updateReservation}
        className="flex flex-col gap-6 bg-zinc-900 px-12 py-8 text-lg"
      >
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            className="w-full rounded-sm bg-zinc-200 px-5 py-3 text-zinc-800 shadow-sm"
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observation">
            Anything we should know about your stay?
          </label>
          <textarea
            name="observation"
            className="w-full rounded-sm bg-zinc-200 px-5 py-3 text-zinc-800 shadow-sm"
          />
        </div>
        <input type="hidden" name="reservationId" value={reservationId} />
        <div className="flex items-center justify-end gap-6">
          <SubmitButton pendingLabel="Updating...">Update reservation</SubmitButton>
        </div>
      </form>
    </div>
  );
}
