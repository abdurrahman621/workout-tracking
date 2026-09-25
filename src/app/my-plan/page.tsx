"use client";

import { usePlan } from "@/context/PlanContext";

const MyPlanPage = () => {
  const { plan, saved } = usePlan();

  return (
    <main className="min-h-screen bg-[#0d0f13] px-5 py-12 text-white">
      <div className="mx-auto max-w-7xl">

        <h1 className="text-4xl font-black uppercase">
          My Plan
        </h1>

        <p className="mt-2 text-sm text-gray-400">
          Track your workouts and saved exercises.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">

          <div className="rounded-xl border border-gray-800 bg-[#151820] p-5">
            <p className="text-xs uppercase text-gray-400">
              Exercises
            </p>

            <p className="mt-2 text-3xl font-black">
              {plan.length}
            </p>
          </div>

          <div className="rounded-xl border border-gray-800 bg-[#151820] p-5">
            <p className="text-xs uppercase text-gray-400">
              Minutes
            </p>

            <p className="mt-2 text-3xl font-black">
              {plan.reduce(
                (total, workout) => total + workout.duration,
                0
              )}
            </p>
          </div>

          <div className="rounded-xl border border-gray-800 bg-[#151820] p-5">
            <p className="text-xs uppercase text-gray-400">
              Calories
            </p>

            <p className="mt-2 text-3xl font-black">
              {plan.reduce(
                (total, workout) =>
                  total + workout.caloriesBurned,
                0
              )}
            </p>
          </div>

        </div>

        <div className="mt-10 flex gap-6 border-b border-gray-800">
          <button className="border-b-2 border-[#ccff00] pb-3 text-sm font-bold uppercase text-[#ccff00]">
            today&apos;s Plan ({plan.length})
          </button>

          <button className="pb-3 text-sm font-bold uppercase text-gray-500">
            Saved ({saved.length})
          </button>
        </div>

        <div className="mt-8">

          {plan.length === 0 ? (
            <div className="rounded-xl border border-dashed border-gray-700 py-16 text-center">
              <h2 className="text-xl font-bold">
                No workouts in your plan
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Add workouts from the workout library.
              </p>
            </div>
          ) : (
            <div className="grid gap-5 md:grid-cols-2">
              {plan.map((workout) => (
                <div
                  key={workout.id}
                  className="rounded-xl border border-gray-800 bg-[#151820] p-4"
                >
                  <h2 className="font-bold uppercase">
                    {workout.name}
                  </h2>

                  <p className="mt-2 text-sm text-gray-400">
                    {workout.equipment}
                  </p>

                  <p className="mt-3 text-sm text-gray-400">
                    {workout.duration} min •{" "}
                    {workout.caloriesBurned} kcal
                  </p>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </main>
  );
};

export default MyPlanPage;