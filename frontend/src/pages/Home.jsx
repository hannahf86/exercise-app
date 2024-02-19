import { useEffect, useState } from "react";

// COMPONENTS
import WorkoutDetails from "../Components/WorkoutDetails";
import WorkoutForm from "../Components/WorkoutForm";

const Home = () => {
  const [workouts, setWorkouts] = useState();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("http://localhost:3000/api/workouts");

      if (!response.ok) {
        throw new Error("Error fetching workouts");
      }

      const json = await response.json();

      setWorkouts(json);
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
