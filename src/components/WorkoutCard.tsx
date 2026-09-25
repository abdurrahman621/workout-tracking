"use client"
// import { usePlan } from "@/context/PlanContext";
import { Workout } from "@/types/workout";
import Image from "next/image";
import Link from "next/link";

interface WorkoutCardProps {
    workout: Workout
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
    return (
        <Link href={`/workout/${workout.id}`}>
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <Image src={workout.image}
                    alt={workout.name}
                    width={500}
                    height={500}
                    className="w-full h-52 object-cover">

                </Image>

                <div className="p-5">

                    <div className="mb-3 flex flex-wrap gap-2">
                        {
                            workout.muscleGroups.map((muscle) => (
                                <span
                                    key={muscle}
                                    className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"

                                >
                                    {muscle}
                                </span>

                            ))
                        }
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{workout.name}</h3>

                    <p>Equipment: {workout.equipment}</p>
                    <div className="mt-5 grid grid-cols-3 gap-3 border-t border-gray-100 pt-4">

                        <div>
                            <p className="text-xs text-gray-400">Duration</p>
                            <p className="mt-1 font-semibold">{workout.duration} min</p>

                        </div>

                        <div>

                            <p className="text-xs text-gray-400 ">Calories</p>
                            <p>{workout.caloriesBurned}</p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-400">Rating</p>
                            <p className="mt-1 font-semibold">
                                ⭐ {workout.rating}
                            </p>
                        </div>
                       



                    </div>
                </div>
            </div>
        </Link>

    );
};

export default WorkoutCard;


