import React from "react";

export const DayDisplay = props => {
  return (
    <div class="nes-container is-dark is-rounded is-centered">
      <p>{`Day: ${props.day} - Time: ${props.time}`}</p>
    </div>
  );
};

export default DayDisplay;
