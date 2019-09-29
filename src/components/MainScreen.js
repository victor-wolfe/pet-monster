import React from "react";
import { PetDisplay } from "./PetDisplay";
import { GameLogic } from "./StatDisplay";
import { ChangeTime } from "./TimeDisplay";

export const MainScreen = () => {
  return (
    <div className="nes-container is-dark is-rounded">
      <ChangeTime />
      <PetDisplay />
      <GameLogic />
    </div>
  );
};
