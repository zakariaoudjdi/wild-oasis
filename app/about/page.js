import Image from "next/image";
import Link from "next/link";
import about1 from "../../public/about-1.jpg";
import about2 from "../../public/about-2.jpg";
import { getCabins } from "../_lib/data-service";

export const revalidate = 60; // Revalidate every 60 seconds
export default async function AboutPage() {
  const cabins = await getCabins();
  const cabinsLength = cabins.length;
  return (
    <div className="grid grid-cols-5 items-center gap-x-24 gap-y-32 text-lg">
      <div className="col-span-3">
        <h1 className="mb-10 text-4xl font-medium text-yellow-400">
          Welcome to The Wild Oasis
        </h1>

        <div className="space-y-8">
          <p>
            Where natures beauty and comfortable living blend seamlessly. Hidden
            away in the heart of the Italian Dolomites, this is your paradise
            away from home. But its not just about the luxury cabins. Its about
            the experience of reconnecting with nature and enjoying simple
            pleasures with family.
          </p>
          <p>
            Our {cabinsLength} luxury cabins provide a cozy base, but the real
            freedom and peace youll find in the surrounding mountains. Wander
            through lush forests, breathe in the fresh air, and watch the stars
            twinkle above from the warmth of a campfire or your hot tub.
          </p>
          <p>
            This is where memorable moments are made, surrounded by natures
            splendor. Its a place to slow down, relax, and feel the joy of being
            together in a beautiful setting.
          </p>
        </div>
      </div>

      <div className="col-span-2">
        <Image
          src={about1}
          alt="Family sitting around a fire pit in front of cabin"
          quality={80}
          placeholder="blur"
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="col-span-2">
        <Image
          src={about2}
          alt="Family that manages The Wild Oasis"
          quality={80}
          placeholder="blur"
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="col-span-3">
        <h1 className="mb-10 text-4xl font-medium text-yellow-400">
          Managed by our family since 1962
        </h1>

        <div className="space-y-8">
          <p>
            Since 1962, The Wild Oasis has been a cherished family-run retreat.
            Started by our grandparents, this haven has been nurtured with love
            and care, passing down through our family as a testament to our
            dedication to creating a warm, welcoming environment.
          </p>
          <p>
            Over the years, weve maintained the essence of The Wild Oasis,
            blending the timeless beauty of the mountains with the personal
            touch only a family business can offer. Here, youre not just a
            guest; youre part of our extended family. So join us at The Wild
            Oasis soon, where tradition meets tranquility, and every visit is
            like coming home.
          </p>

          <div>
            <Link
              href="/cabins"
              className="mt-4 inline-block bg-yellow-500 px-8 py-5 text-lg font-semibold text-zinc-800 transition-all hover:bg-yellow-600"
            >
              Explore our luxury cabins
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
