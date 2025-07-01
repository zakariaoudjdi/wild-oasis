import Image from "next/image";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import TextExpander from "@/app/_components/TextExpander";
export default function Cabin({ cabin }) {
  const { name, maxCapacity, description, image } = cabin;
  return (
    <div className="mb-24 grid grid-cols-[3fr_4fr] gap-20 border border-zinc-800 px-10 py-3">
      <div className="relative -translate-x-3 scale-[1.15]">
        <Image
          src={image}
          quality={60}
          className="object-cover object-center"
          fill
          alt={`Cabin ${name}`}
        />
      </div>

      <div>
        <h3 className="mb-5 w-[150%] translate-x-[-254px] bg-zinc-950 p-6 pb-1 text-7xl font-black text-yellow-100">
          Cabin {name}
        </h3>

        <p className="mb-10 text-lg text-zinc-300">
          <TextExpander>{description}</TextExpander>
        </p>

        <ul className="mb-7 flex flex-col gap-4">
          <li className="flex items-center gap-3">
            <UsersIcon className="text-primary-600 h-5 w-5" />
            <span className="text-lg">
              For up to <span className="font-bold">{maxCapacity.max}</span>{" "}
              guests
            </span>
          </li>
          <li className="flex items-center gap-3">
            <MapPinIcon className="h-5 w-5 text-zinc-600" />
            <span className="text-lg">
              Located in the heart of the{" "}
              <span className="font-bold">Dolomites</span> (Italy)
            </span>
          </li>
          <li className="flex items-center gap-3">
            <EyeSlashIcon className="h-5 w-5 text-zinc-600" />
            <span className="text-lg">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
