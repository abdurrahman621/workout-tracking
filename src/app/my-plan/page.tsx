"use client";

import { usePlan } from "@/context/PlanContext";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

const MyPlanPage = () => {
  const { plan, saved, removeFromPlan, markAsDone } = usePlan();

  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");
   const workouts = activeTab === "plan" ? plan : saved;

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
          <button
            onClick={() => setActiveTab("plan")}
            className={`pb-3 text-sm font-bold uppercase ${activeTab === "plan"
                ? "border-b-2 border-[#ccff00] text-[#ccff00]"
                : "text-gray-500"
              }`}
          > today&apos;s Plan ({plan.length})
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`pb-3 text-sm font-bold uppercase ${activeTab === "saved"
                ? "border-b-2 border-[#ccff00] text-[#ccff00]"
                : "text-gray-500"
              }`}
          >
            Saved ({saved.length})
          </button>
        </div>

        <div className="mt-8">
           {workouts.length === 0 ? (

          
            <div className="rounded-xl border border-dashed border-gray-700 py-16 text-center">
              <h2 className="text-xl font-bold">
                {activeTab==="plan"
                ?"No workouts in your plan":"No saved workouts"
                }
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                {activeTab==="plan"
                ?"Add workouts from the workout library.": "Save workouts to see them here." 
              }
              </p>
            </div>
          ) : (
            <div className="grid gap-5 md:grid-cols-2">
              {workouts.map((workout) => (
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
                  <div className="mt-4 flex gap-3">
                    <Link
                      href={`/workout/${workout.id}`}
                      className="rounded-lg bg-[#ccff00] px-4 py-2 text-sm font-bold text-black transition hover:bg-[#b8e600]"
                    >
                      View Details
                    </Link>
                    <button
                      onClick={() => {
                        markAsDone(workout.id);
                        toast.success("Workout marked as done!");
                      }}
                      disabled={workout.completed}
                      className="rounded-lg border border-[#ccff00] px-4 py-2 text-sm font-bold text-[#ccff00] transition hover:bg-[#ccff00] hover:text-black disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {workout.completed ? "Done" : "Mark as Done"}
                    </button>

                    {activeTab==="plan"&&(
                    <button
                      onClick={() => removeFromPlan(workout.id)}
                      className="mt-4 rounded-lg border border-gray-700 px-4 py-2 text-sm text-gray-400 transition hover:border-red-500 hover:text-red-500"
                    >
                      Remove
                    </button>
                    )}
                  </div>
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