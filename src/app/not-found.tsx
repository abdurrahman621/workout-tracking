import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#0d0f13] px-5 text-white">
      <div className="text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-[#ccff00]">
          404 Error
        </p>

        <h1 className="mt-4 text-5xl font-black uppercase md:text-7xl">
          Workout Not Found
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-gray-400">
          The workout you are looking for does not exist or may have been
          removed.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-lg bg-[#ccff00] px-6 py-3 text-sm font-bold text-black transition hover:bg-[#b8e600]"
        >
          Back to Workouts
        </Link>
      </div>
    </main>
  );
};

export default NotFound;