import Link from 'next/link';
import Image from 'next/image';
import bgImage from '@/public/bg.png';
export default function Home() {
  return (
    <div className='mt-24'>
      <Image src={bgImage} placeholder='blur' quality={50} fill className='object-cover object-top' alt="Mountains and forests with two cabins" />

      <div className="relative z-10 text-center">
        <h1 className="text-green-50 mb-10 text-8xl font-normal tracking-tight">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="bg-yellow-500 text-white font-light hover:bg-yellow-600 px-8 py-6 text-lg  transition-all"
        >
          Explore luxury cabins
        </Link>
      </div>
    </div>
  );
}
