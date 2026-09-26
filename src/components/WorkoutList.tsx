"use client";

import { useState } from "react";
import type { Workout } from "../types/workout";
import WorkoutCard from "./WorkoutCard";

interface WorkoutListProps {
    workouts: Workout[];
}

const WorkoutList = ({ workouts }: WorkoutListProps) => {
    const [sortBy, setSortBy] = useState("duration");

    const sortedWorkouts = [...workouts].sort((a, b) => {
        if (sortBy === "duration") {
            return a.duration - b.duration;
        }

        if (sortBy === "calories") {
            return a.caloriesBurned - b.caloriesBurned;
        }

        if (sortBy === "rating") {
            return b.rating - a.rating;
        }

        return 0;
    });

    return (
        <div>
            <div className="mb-6 flex items-center justify-end gap-3">
                <label htmlFor="sort" className="text-sm font-medium text-gray-400"> Sort By </label>
                <div className="relative">
                    <select
                        id="sort"
                        value={sortBy}
                        onChange={(event) => setSortBy(event.target.value)}
                        className="rounded-lg border border-gray-700 bg-[#151820] px-4 py-3 text-sm text-white outline-none"
                    >
                        <option value="duration" className="bg-[#151820]">Duration</option>
                        <option value="calories" className="bg-[#151820]">Calories</option>
                        <option value="rating" className="bg-[#151820]">Rating</option>
                    </select>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {sortedWorkouts.map((workout) => (
                    <WorkoutCard
                        key={workout.id}
                        workout={workout}
                    />
                ))}
            </div>
        </div>
    );
};

export default WorkoutList;