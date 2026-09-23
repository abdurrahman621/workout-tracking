import WorkoutCard from "./WorkoutCard";

interface Workout {
  id: number;
  name: string;
}

const WorkoutLibrary = async () => {
  const response = await fetch(
    "https://api.abcz.workers.dev/api/fitlog"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch workouts");
  }

  const workouts: Workout[] = await response.json();

  return (
    <section id="library" className="px-5 py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-gray-900">The Library</h2>
        <p className="mt-2 text-gray-500">Twelve lifts covering every major muscle group.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {
            workouts.map(workout => <WorkoutCard key={workout.id} workout={workout}></WorkoutCard>)
          }
        </div>
      </div>
    </section>
  );
};

export default WorkoutLibrary;
