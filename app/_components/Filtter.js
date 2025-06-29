"use client";
import { useState  } from "react";
import {useSearchParams , useRouter} from "next/navigation";
function Filtter() {
  const router = useRouter();
const searchParams = useSearchParams();
  const [capacity, setCapacity] = useState("all");
const handleCapacityChange = (event) => {
  setCapacity(event.target.value);
  const params = new URLSearchParams(searchParams);
  params.set("capacity", event.target.value);
  router.replace(`?${params.toString()}`);
  console.log(`Selected capacity: ${event.target.value}`);
};
  return (
    <div className="mb-5 flex items-center justify-between">
      <h2 className="text-2xl font-semibold text-yellow-400">Cabins</h2>
      <div className="flex items-center gap-4">
        <label htmlFor="capacity" className="text-yellow-400">
          Capacity:
        </label>
        <select
          id="capacity"
          name="capacity"
          className="rounded-md bg-gray-800 p-2 text-yellow-400"
          value={capacity}
          onChange={handleCapacityChange}
        >
          <option value="all">All</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
        </select>
      </div>
    </div>
  );
}

export default Filtter;
