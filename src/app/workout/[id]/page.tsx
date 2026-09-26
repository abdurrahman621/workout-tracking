import { notFound } from "next/navigation";
import WorkoutDetails from "../../../components/WorkoutDetails";

import type { Workout } from "../../../types/workout";

interface WorkoutDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const WorkoutDetailsPage = async ({
  params,
}: WorkoutDetailsPageProps) => {
  const { id } = await params;

  const response = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${id}`
  );

  if(response.status===404){
    notFound()
  }

  if (!response.ok) {
    throw new Error("Failed to fetch workout");
  }

  const workout: Workout = await response.json();

  return (
    <main className="min-h-screen bg-[#0d0f13] px-5 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <WorkoutDetails workout={workout} />
      </div>
    </main>
  );
};

export default WorkoutDetailsPage;