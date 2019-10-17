import React from "react";
import { PetDisplay } from "../components/PetDisplay";
import { StatDisplay } from "../components/StatDisplay";
import DayDisplay from "../components/TimeDisplay";

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
