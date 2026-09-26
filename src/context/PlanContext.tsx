"use client";

import { createContext, useContext, useState } from "react";
import type { Workout } from "../types/workout";
// import { Preahvihear } from "next/font/google";

interface PlanContextType {
  plan: Workout[];
  saved: Workout[];

  addToPlan: (workout: Workout) => void;
  saveWorkout: (workout: Workout) => void;
  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;

  markAsDone: (id: number) => void;
}

const PlanContext = createContext<PlanContextType | undefined>(
  undefined
);

export const PlanProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);

  const addToPlan = (workout: Workout) => {
    setPlan((previousPlan) => {
      const alreadyExists = previousPlan.some(
        (item) => item.id === workout.id
      )
      if (alreadyExists) {
        return previousPlan
      }
      if (previousPlan.length >= 5) {
        return previousPlan
      }
      return [...previousPlan, workout]
    })
  }

  const saveWorkout = (workout: Workout) => {
    setSaved((previousSaved) => {
      const alreadyExists = previousSaved.some((item) => item.id === workout.id)
      if (alreadyExists) {
        return previousSaved
      }
      return [...previousSaved, workout]
    })
  };
  const removeFromPlan = (id: number) => {
    setPlan((previousPlan) =>
      previousPlan.filter((workout) => workout.id !== id)
    );
  };

  const removeFromSaved = (id: number) => {
    setSaved((previousSaved) =>
      previousSaved.filter((workout) => workout.id !== id)
    );
  };
  const markAsDone = (id: number) => {
    setPlan((previousPlan) =>
      previousPlan.map((workout) =>
        workout.id === id
          ? { ...workout, completed: true }
          : workout
      )
    );
  };

  return (
    <PlanContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        saveWorkout,
        removeFromPlan,
        markAsDone,
        removeFromSaved
      }}
    >
      {children}
    </PlanContext.Provider>
  );
};

export const usePlan = () => {
  const context = useContext(PlanContext);

  if (!context) {
    throw new Error(
      "usePlan must be used inside PlanProvider"
    );
  }

  return context;
};