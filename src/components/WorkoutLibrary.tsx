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
    <section id="library">
      <h2>The Library</h2>

      {workouts.map((workout) => (
        <div key={workout.id}>
          <h3>{workout.name}</h3>
        </div>
      ))}
    </section>
  );
};

export default WorkoutLibrary;
