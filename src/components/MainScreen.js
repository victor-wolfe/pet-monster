import React from "react";
import ReactDOM from "react-dom";
import { STYLES } from "../styles";
import { StatDisplay, dragonStats } from "./StatDisplay";
import { PetDisplay } from "./PetDisplay";
import { ActionDisplay } from "./ActionDisplay";
import { DayDisplay } from "./TimeDisplay";

export const MainScreen = () => {
  return (
    <div className="container">
      <DayDisplay />
      <PetDisplay />
      <StatDisplay stats={dragonStats} />
      <ActionDisplay />
    </div>
  );
};
