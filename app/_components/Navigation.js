import Link from "next/link";
import { auth } from "@/app/_lib/auth";
import { se } from "date-fns/locale";
export default async function Navigation() {
  // Check if the user is authenticated
  const session = await auth();

  return (
    <nav className="bg z-10 text-xl">
      <ul className="flex items-center gap-16">
        <li>
          <Link
            href="/cabins"
            className="transition-colors hover:text-zinc-400"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link href="/about" className="transition-colors hover:text-zinc-400">
            About
          </Link>
        </li>
        <li>
          {session?.user ? (
            <Link className="flex items-center gap-2" href="/account">
              <img
                src={session.user.image}
                className="h-10 w-10 rounded-full border border-zinc-200 object-cover"
                alt={session.user.name}
                referrerPolicy="no-referrer"
              />
              <span>{session.user.name}</span>
            </Link>
          ) : (
            <Link href="/account" className="px-6 py-4 transition-colors">
              Guest user
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
