import CabinCard from "@/app/_components/CabinCard";
import { getCabins } from "../_lib/data-service";
import { unstable_noStore as noStor } from "next/cache";
async function CabinList({ capacity = "all" }) {

  const cabins = await getCabins();
  let displayCabins = cabins;
if(capacity === "all") {
  displayCabins = cabins;
}
if(capacity ==="small"){
  displayCabins = cabins.filter((cabin) => cabin.maxCapacity <= 2);
}
if(capacity ==="medium"){
  displayCabins = cabins.filter((cabin) => cabin.maxCapacity > 2 && cabin
.maxCapacity <= 4);

}

  return (
    <div>
      {cabins.length > 0 && (
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:gap-12 xl:gap-14">
          {displayCabins?.map((cabin) => (
            <CabinCard cabin={cabin} key={cabin?.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CabinList;
