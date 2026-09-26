import WorkoutList from "./WorkoutList";
import type { Workout } from "../types/workout";


const WorkoutLibrary = async () => {
  const response = await fetch(



    "https://api.abcz.workers.dev/api/fitlog"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch workouts");
  }

  const workouts: Workout[] = await response.json();

  return (
    <section id="library" className="bg-[#0d0f13] text-white px-5 py-16 ">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white">The Library</h2>
            <p className="mt-2 text-gray-400">Twelve lifts covering every major muscle group.</p>
          </div>
        </div>
        <div className="mt-8">
          <WorkoutList workouts={workouts}></WorkoutList>
        </div>
      </div>
    </section>
  );
};

export default WorkoutLibrary;
