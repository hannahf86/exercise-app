import { useEffect, useState } from "react";

// COMPONENTS
import WorkoutDetails from "../Components/WorkoutDetails";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkout = async () => {
      const response = await fetch("workouts/");
      const json = await response.json();

      if (response.ok) {
        setWorkouts(json.workout);
      }
    };

    fetchWorkout();
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
    </div>
  );
};

export default Home;
