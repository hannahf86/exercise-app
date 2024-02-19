import { WorkoutContext } from "../Contexts/WorkoutContext";
import { useContext } from "react";

export const useWorkoutContext = () => {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw Error("Error: WorkoutContext");
  }

  return context;
};
