import React from "react";
import ReactDOM from "react-dom";
import { STYLES } from "../styles";
import { StatDisplay } from "./StatDisplay";
import { PetDisplay } from "./PetDisplay";
import { ActionDisplay } from "./ActionDisplay";

export const MainScreen = () => {
  return (
    <div>
      <PetDisplay />
      <StatDisplay />
      <ActionDisplay />
    </div>
  );
};

export default MainScreen;
