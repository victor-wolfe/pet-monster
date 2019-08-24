import React from "react";

const DAY_TIME = {
  day: 0,
  time: "morning"
};

export const DayDisplay = () => {
  return (
    <div>
      <p>
        Day {DAY_TIME["day"]} - {DAY_TIME["time"]}
      </p>
    </div>
  );
};

export default DayDisplay;
