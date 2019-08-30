import React from "react";

const DAY_TIME = {
  day: 1,
  time: "morning"
};

const MORNING_AFTERNOON_NIGHT = ["Morning", "Afternoon", "Night"];

export const DayDisplay = () => {
  return (
    <div class="nes-container is-dark is-rounded is-centered">
      <p>
        Day {DAY_TIME["day"]} - {DAY_TIME["time"]}
      </p>
    </div>
  );
};

export default DayDisplay;
