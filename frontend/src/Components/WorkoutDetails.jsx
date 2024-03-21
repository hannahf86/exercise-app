/* eslint-disable react/prop-types */

// contexts
import { useWorkoutContext } from "../Hooks/useWorkoutContext";

// date-fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

// icons
import { HiTrash } from "react-icons/hi";

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutContext();

  const handleClick = async () => {
    const response = await fetch(
      "http://localhost:3000/api/workouts/" + workout._id,
      {
        method: "DELETE",
      }
    );
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Number of reps: </strong>
        {workout.reps}
      </p>
      <p>
        {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
      </p>
      <span onClick={handleClick}>
        <HiTrash size={30} color="#b5140e" />
      </span>
    </div>
  );
};

export default WorkoutDetails;
