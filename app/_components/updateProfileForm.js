"use client";

import {useState} from "react";
function UpdateProfileForm({ children }) {

  const [country, setCountry] = useState("");

  return (
    <form className="flex flex-col gap-6 bg-zinc-900 px-12 py-8 text-lg">
      <div className="space-y-2">
        <label htmlFor="firstName">First name</label>
        <input
          disabled
          className="w-full rounded-sm bg-zinc-200 px-5 py-3 text-zinc-800 shadow-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <label>Email address</label>
        <input
          disabled
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
          className="w-full rounded-sm bg-zinc-200 px-5 py-3 text-zinc-800 shadow-sm"
        />
      </div>

      <div className="flex items-center justify-end gap-6">
        <button className="bg-yallow-500 hover:bg-yallow-600 px-8 py-4 font-semibold text-zinc-800 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300">
          Update profile
        </button>
      </div>
    </form>
  );
}

export default UpdateProfileForm;
