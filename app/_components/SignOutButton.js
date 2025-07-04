import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { signOutAction } from "../_lib/actions";
function SignOutButton() {
  return (
    <form action={signOutAction}>
      <button className="hover:bg-zinc-900 hover:text-zinc-100 text-zinc-200 flex w-full items-center gap-4 px-5 py-3 font-semibold transition-colors cursor-pointer">
        <ArrowRightOnRectangleIcon className="text-zinc-600 h-5 w-5" />
        <span>Sign out</span>
      </button>
    </form>
  );
}

export default SignOutButton;
