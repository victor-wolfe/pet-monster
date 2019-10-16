import React from "react";
import { PetDisplay } from "./PetDisplay";
import { StatDisplay } from "./StatDisplay";
import DayDisplay from "./TimeDisplay";

const MainScreen = () => {
  return (
    <div className="nes-container is-dark is-rounded">
      <DayDisplay />
      <PetDisplay />
      <StatDisplay />
    </div>
  );
};

export default MainScreen;
