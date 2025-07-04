import UpdateProfileForm from "@/app/_components/updateProfileForm";
import SelectCountry from "@/app/_components/SelectCountry";
export default function Page() {
  const nationality = "portugal";
  return (
    <div>
      <h2 className="text-yallow-400 mb-4 text-2xl font-semibold">
        Update your guest profile
      </h2>
      <p className="mb-8 text-lg text-zinc-200">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>
      <UpdateProfileForm>
        <SelectCountry
          name="nationality"
          id="nationality"
          className="w-full rounded-sm bg-zinc-200 px-5 py-3 text-zinc-800 shadow-sm"
          defaultCountry={nationality}
        />
      </UpdateProfileForm>
    </div>
  );
}
