interface WorkoutCardProps {
  workout: {
    id: number;
    name: string;
  };
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <h3 className="text-xl font-bold text-gray-900">
        {workout.name}
      </h3>

      <p className="mt-2 text-sm text-gray-500">
        Workout ID: {workout.id}
      </p>
    </div>
  );
};

export default WorkoutCard;