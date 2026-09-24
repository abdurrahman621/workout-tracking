"use client";

import type { Workout } from "../types/workout";
import { usePlan } from "../context/PlanContext";
import Image from "next/image";

interface WorkoutDetailsProps {
  workout: Workout;
}

const WorkoutDetails = ({ workout }: WorkoutDetailsProps) => {
  const { addToPlan, saveWorkout } = usePlan();

  return (
    <div className="grid gap-10 md:grid-cols-2">
      {/* Left Side - Image */}
      <div>
        <Image
          src={workout.image}
          alt={workout.name}
          width={588}
          height={735}
          className="h-[430px] w-full rounded-xl object-cover"
        />
      </div>

      {/* Right Side - Details */}
      <div>
        {/* Title */}
        <h1 className="text-3xl font-black uppercase md:text-4xl">
          {workout.name}
        </h1>

        {/* Description */}
        <p className="mt-3 text-sm leading-6 text-gray-400">
          {workout.description}
        </p>

        {/* Muscle Groups */}
        <div className="mt-4 flex flex-wrap gap-2">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-[#ccff00] px-4 py-1 text-xs font-bold text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Workout Information */}
        <div className="mt-6 overflow-hidden rounded-xl border border-gray-800 bg-[#151820]">
          <div className="flex justify-between border-b border-gray-800 px-4 py-4">
            <span className="text-xs uppercase text-gray-400">
              Equipment
            </span>

            <span className="text-sm">
              {workout.equipment}
            </span>
          </div>

          <div className="flex justify-between border-b border-gray-800 px-4 py-4">
            <span className="text-xs uppercase text-gray-400">
              Difficulty
            </span>

            <span className="text-sm">
              {workout.difficulty}
            </span>
          </div>

          <div className="flex justify-between border-b border-gray-800 px-4 py-4">
            <span className="text-xs uppercase text-gray-400">
              Sets
            </span>

            <span className="text-sm">
              {workout.sets}
            </span>
          </div>

          <div className="flex justify-between border-b border-gray-800 px-4 py-4">
            <span className="text-xs uppercase text-gray-400">
              Reps
            </span>

            <span className="text-sm">
              {workout.reps}
            </span>
          </div>

          <div className="flex justify-between border-b border-gray-800 px-4 py-4">
            <span className="text-xs uppercase text-gray-400">
              Duration
            </span>

            <span className="text-sm">
              {workout.duration} min
            </span>
          </div>

          <div className="flex justify-between border-b border-gray-800 px-4 py-4">
            <span className="text-xs uppercase text-gray-400">
              Calories
            </span>

            <span className="text-sm">
              {workout.caloriesBurned} kcal
            </span>
          </div>

          <div className="flex justify-between px-4 py-4">
            <span className="text-xs uppercase text-gray-400">
              Rating
            </span>

            <span className="text-sm">
              ⭐ {workout.rating}
            </span>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-6">
          <h2 className="text-sm font-bold uppercase">
            Instructions
          </h2>

          <ol className="mt-4 space-y-3">
            {workout.instructions.map((instruction, index) => (
              <li
                key={index}
                className="flex gap-3 text-xs leading-5 text-gray-400"
              >
                <span className="text-white">
                  {index + 1}.
                </span>

                <span>{instruction}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Buttons */}
        <div className="mt-7 flex flex-wrap gap-3">
          <button
            onClick={() => addToPlan(workout)}
            className="rounded-lg bg-[#ccff00] px-5 py-3 text-sm font-bold text-black transition hover:bg-[#b8e600]"
          >
            Add to today s plan
          </button>

          <button
            onClick={() => saveWorkout(workout)}
            className="rounded-lg border border-gray-700 px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            ♡ Save for later
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetails;