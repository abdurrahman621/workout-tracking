"use client";

import { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { usePlan } from "@/context/PlanContext";
import Image from "next/image";

const MyPlanPage = () => {
  const {
    plan,
    saved,
    removeFromPlan,
    removeFromSaved,
    markAsDone,
  } = usePlan();

  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  const workouts = activeTab === "plan" ? plan : saved;

  const totalMinutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  return (
    <main className="min-h-screen bg-[#0d0f13] px-5 py-12 text-white">
      <div className="mx-auto max-w-7xl">

        <div>
          <h1 className="text-4xl font-black uppercase md:text-5xl">
            My Plan
          </h1>

          <p className="mt-3 text-sm text-gray-400">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-gray-800 bg-[#151820] p-5">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
              Exercises
            </p>

            <p className="mt-2 text-3xl font-black">
              {plan.length}
            </p>
          </div>

          <div className="rounded-xl border border-gray-800 bg-[#151820] p-5">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
              Minutes
            </p>

            <p className="mt-2 text-3xl font-black">
              {totalMinutes}
            </p>
          </div>

          <div className="rounded-xl border border-gray-800 bg-[#151820] p-5">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
              Calories
            </p>

            <p className="mt-2 text-3xl font-black">
              {totalCalories}
            </p>
          </div>
        </div>

        <div className="mt-10 flex gap-6 border-b border-gray-800">
          <button
            onClick={() => setActiveTab("plan")}
            className={`pb-3 text-sm font-bold uppercase transition ${activeTab === "plan"
              ? "border-b-2 border-[#ccff00] text-[#ccff00]"
              : "text-gray-500 hover:text-white"
              }`}
          >
            Today&apos;s Plan ({plan.length})
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`pb-3 text-sm font-bold uppercase transition ${activeTab === "saved"
              ? "border-b-2 border-[#ccff00] text-[#ccff00]"
              : "text-gray-500 hover:text-white"
              }`}
          >
            Saved ({saved.length})
          </button>
        </div>

        <div className="mt-8">
          {workouts.length === 0 ? (
            <div className="rounded-xl border border-dashed border-gray-700 px-5 py-16 text-center">
              <h2 className="text-2xl font-black uppercase">
                Nothing Here Yet
              </h2>

              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500">
                Browse the library and add a lift to get today moving.
              </p>

              <Link
                href="/"
                className="mt-6 inline-flex rounded-lg bg-[#ccff00] px-5 py-3 text-sm font-bold uppercase text-black transition hover:bg-[#b8e600]"
              >
                Go to workouts
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              {workouts.map((workout) => (
                <div
                  key={workout.id}
                  className="flex items-center gap-4 overflow-hidden rounded-xl border border-gray-800 bg-[#151820] p-3"
                >
                  <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-lg">
                    <Image
                      src={workout.image}
                      alt={workout.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1 px-2">

                    <h2 className="text-xl font-black uppercase">
                      {workout.name}
                    </h2>

                    <p className="mt-2 text-sm text-gray-400">
                      {workout.equipment}
                    </p>

                    {/* Stats */}
                    <div className="mt-2 flex items-center gap-4 text-xs text-gray-400">
                      <span>
                        ◷ {workout.duration} min
                      </span>

                      <span>
                        🔥 {workout.caloriesBurned} kcal
                      </span>

                      <span>
                        ★ {workout.rating}
                      </span>
                    </div>

                  </div>

                  {/* Actions */}
                  <div className="flex shrink-0 items-center gap-3">
                    {/* View Details */}
                    <Link
                      href={`/workout/${workout.id}`}
                      className="rounded-lg bg-[#ccff00] px-4 py-2 text-sm font-bold text-black transition hover:bg-[#b8e600]"
                    >
                      View Details
                    </Link>

                    {/* Mark as Done */}
                    {activeTab === "plan" && (
                      <button
                        onClick={() => {
                          markAsDone(workout.id);

                          toast.success(
                            "Workout marked as done!"
                          );
                        }}
                        disabled={workout.completed}
                        className="rounded-lg border border-gray-700 px-4 py-2 text-sm font-bold text-white transition hover:border-[#ccff00] hover:text-[#ccff00] disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        {workout.completed
                          ? "✓ Done"
                          : "✓ Mark as Done"}
                      </button>
                    )}

                    {/* Remove */}
                    <button
                      onClick={() => {
                        if (activeTab === "plan") {
                          removeFromPlan(workout.id);
                          toast.success(
                            "Workout removed from your plan!"
                          );
                        } else {
                          removeFromSaved(workout.id);
                          toast.success(
                            "Workout removed from saved!"
                          );
                        }
                      }}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-700 text-lg text-gray-400 transition hover:border-red-500 hover:text-red-500"
                      aria-label="Remove workout"
                    >
                      x
                    </button>
                  </div>
                </div>

              ))}
            </div>
          )}
        </div>
      </div>
    </main >
  );
};

export default MyPlanPage;