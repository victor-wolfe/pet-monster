import React from "react";
import ReactDOM from "react-dom";
import { STYLES } from "../styles";
import { PetDisplay } from "./PetDisplay";
import { StatDisplay } from "./StatDisplay";
import { DayDisplay } from "./TimeDisplay";

export const MainScreen = () => {
  return (
    <div className="nes-container is-dark is-rounded">
      <DayDisplay />
      <PetDisplay />
      <StatDisplay />
    </div>
  );
};
