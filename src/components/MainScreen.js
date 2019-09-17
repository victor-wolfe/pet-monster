import React from "react";
import { PetDisplay } from "./PetDisplay";
import { StatDefinitions } from "./StatDisplay";
import { DayDisplay } from "./TimeDisplay";

export const MainScreen = () => {
  return (
    <div className="nes-container is-dark is-rounded">
      <DayDisplay />
      <PetDisplay />
      <StatDefinitions />
    </div>
  );
};
