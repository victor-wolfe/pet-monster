import React from "react";
import { useStoreState } from "easy-peasy";

export const DayDisplay = () => {
  const dayNumber = useStoreState(state => state.stats.day);
  const timeOfDay = useStoreState(state => state.stats.time);

  return (
    <div className="nes-container is-dark is-rounded is-centered">
      <p>{`Day: ${dayNumber} - Time: ${timeOfDay}`}</p>
    </div>
  );
};

export default DayDisplay;
