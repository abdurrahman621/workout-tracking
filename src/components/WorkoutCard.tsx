"use client";

import { Workout } from "@/types/workout";
import Image from "next/image";
import Link from "next/link";

interface WorkoutCardProps {
  workout: Workout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Link href={`/workout/${workout.id}`}>
      <div className="group block overflow-hidden rounded-2xl border border-gray-800 bg-[#13161d] shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        
        <div className="relative h-82 w-full overflow-hidden bg-gray-900">
          <Image
            src={workout.image}
            alt={workout.name}
            width={500}
            height={500}
            className="object-cover transition duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-5">
          
          <div className="mb-3 flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#C2F800] px-3 py-1 text-xs font-medium text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-bold text-white">
            {workout.name}
          </h3>

          <p className="font-light text-[#9CA3AF]">Equipment: {workout.equipment}</p>

          <div className="mt-5 flex items-center justify-between border-t border-gray-800 pt-4 text-xs text-gray-400">
            
            <div className="flex items-center gap-1.5">
              <span>◷</span>
              <span>{workout.duration} min</span>
            </div>

            <div className="flex items-center gap-1.5">
              <span>●</span>
              <span>{workout.caloriesBurned} kcal</span>
            </div>

            <div className="flex items-center gap-1.5">
              <span>☆</span>
              <span>{workout.rating}</span>
            </div>

          </div>
        </div>

      </div>
    </Link>
  );
};

export default WorkoutCard;