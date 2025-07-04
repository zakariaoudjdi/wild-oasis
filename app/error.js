"use client";
export default function Error({error, reset}) {
  return (
    <main className='flex justify-center items-center flex-col gap-6'>
      <h1 className='text-3xl font-semibold'>Something went wrong!</h1>
      <p className='text-lg'>{
        error.message || "An unexpected error occurred. Please try again later."
        }</p>

      <button className='inline-block bg-yellow-500 text-zinc-800 px-6 py-3 text-lg' onClick={() => reset()}>
        Try again
      </button>
    </main>
  );
}
