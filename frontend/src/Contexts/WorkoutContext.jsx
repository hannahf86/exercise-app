/* eslint-disable react/prop-types */

import { createContext } from "react";

export const WorkoutContext = createContext();

// provide the context to the components - wrap around children/app in main.jsx
export const WorkoutContextProvider = ({ children }) => {
  return <WorkoutContextProvider>{children}</WorkoutContextProvider>;
};
