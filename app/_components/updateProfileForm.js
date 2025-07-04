"use client";

import { updateProfileAction } from "@/app/_lib/actions";
import { useState } from "react";
import { useFormStatus } from "react-dom";
function UpdateProfileForm({ children, guest }) {
  const [country, setCountry] = useState("");
  const { fullName, email, nationality, nationalID, countryFlag } = guest || {};

  return (
    <form
      action={updateProfileAction}
      className="flex flex-col gap-6 bg-zinc-900 px-12 py-8 text-lg"
    >
      <div className="space-y-2">
        <label htmlFor="firstName">First name</label>
        <input
          disabled
          defaultValue={fullName}
          className="w-full rounded-sm bg-zinc-200 px-5 py-3 text-zinc-800 shadow-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <label>Email address</label>
        <input
          disabled
          name="email"
          defaultValue={email}
          className="w-full rounded-sm bg-zinc-200 px-5 py-3 text-zinc-800 shadow-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="nationality">Where are you from?</label>
        </div>
        {children}
      </div>

      <div className="space-y-2">
        <label htmlFor="nationalID">National ID number</label>
        <input
          name="nationalID"
          defaultValue={nationalID}
          className="w-full rounded-sm bg-zinc-200 px-5 py-3 text-zinc-800 shadow-sm"
        />
      </div>

      <div className="flex items-center justify-end gap-6">
        <Button />
      </div>
    </form>
  );
}

function Button() {
  const formState = useFormStatus();
  return (
    <button
      type="submit"
      disabled={formState.pending}
      className="cursor-pointer bg-yellow-500 px-8 py-4 font-semibold text-zinc-800 transition-all hover:bg-yellow-600 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
    >
      {formState.pending ? "Updating..." : "Update profile"}
    </button>
  );
}
export default UpdateProfileForm;
