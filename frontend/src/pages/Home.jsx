import { useEffect } from "react";
import { useWorkoutContext } from "../Hooks/useWorkoutContext";

// COMPONENTS
import WorkoutDetails from "../Components/WorkoutDetails";
import WorkoutForm from "../Components/WorkoutForm";

const Home = () => {
  const { workouts, dispatch } = useWorkoutContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch(
        "https://exercise-35750bmtz-hannah-feehans-projects.vercel.app/api/workouts"
      );

      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>

      <div>
        <WorkoutForm />
      </div>
    </div>
  );
};

export default Home;
