import { signInAction } from "../_lib/actions";
function SignInButton() {
  return (
    <form action={signInAction}>
      <button className="flex cursor-pointer items-center gap-6 border border-zinc-300 px-10 py-4 text-lg font-medium transition-colors hover:bg-zinc-800">
        <img
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="24"
          width="24"
        />
        <span>Continue with Google</span>
      </button>
    </form>
  );
}

export default SignInButton;
