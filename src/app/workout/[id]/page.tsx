import { Workout } from "@/types/workout";
import Image from "next/image";

interface workoutDetailsprops {
    params: Promise<{
        id: string;
    }>
}

const WorkoutDetails = async ({ params }: workoutDetailsprops) => {
    const { id } = await params;
    const response = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`)

    if (!response.ok) {
        throw new Error("Failed to fetch workout");
    }

    const workout: Workout = await response.json()

    return (
        <main className="mx-auto max-w-7xl px-5 py-16" >
            <div className="grid gap-10 md:grid-cols-2">

                <div>
                    <Image src={workout.image}
                        alt={workout.name}
                        width={588}
                        height={773}
                        className="h-[400px] w-full rounded-2xl object-cover"
                    ></Image>
                </div>

                <div>
                    <h1 className="text-4xl font-bold text-gray-900">{workout.name}</h1>
                    <p className="mt-4 text-gray-600">Equipment: {workout.equipment}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                        {
                            workout.muscleGroups.map((muscle) => (
                                <span key={muscle}
                                    className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700">{muscle}</span>
                            ))
                        }
                    </div>


                    <div className="mt-8 grid grid-cols-3 gap-4">
                        <div className="rounded-xl bg-gray-100 p-4">
                            <p className="text-sm text-gray-500">Duration</p>
                            <p className="mt-1 font-bold">
                                {workout.duration} min
                            </p>
                        </div>

                        <div className="rounded-xl bg-gray-100 p-4">
                            <p className="text-sm text-gray-500">Calories</p>
                            <p className="mt-1 font-bold">
                                {workout.caloriesBurned}
                            </p>
                        </div>

                        <div className="rounded-xl bg-gray-100 p-4">
                            <p className="text-sm text-gray-500">Rating</p>
                            <p className="mt-1 font-bold">
                                ⭐ {workout.rating}
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
};

export default WorkoutDetails;