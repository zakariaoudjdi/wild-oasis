import UpdateProfileForm from "@/app/_components/updateProfileForm";
import SelectCountry from "@/app/_components/SelectCountry";
import { getGuest } from "@/app/_lib/data-service";
import { auth } from "@/app/_lib/auth";
export default async function Page() {
  const session = await auth();
  const guest = await getGuest(session?.user?.email);
  return (
    <div>
      <h2 className="text-yallow-400 mb-4 text-2xl font-semibold">
        Update your guest profile {guest?.nationality || "Guest"}
      </h2>
      <p className="mb-8 text-lg text-zinc-200">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>
      <UpdateProfileForm guest={guest}> 
        <SelectCountry
          name="nationality"
          defaultCountry={guest?.nationality || ""}
          id="nationality"
          className="w-full rounded-sm bg-zinc-200 px-5 py-3 text-zinc-800 shadow-sm"
        />
      </UpdateProfileForm>
    </div>
  );
}
