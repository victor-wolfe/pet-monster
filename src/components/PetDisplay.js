import React from "react";
import { useStoreState } from "easy-peasy";
import { Baby } from "./SVG";
import MessageDisplay from "./MessageDisplay";

export const PetDisplay = props => {
  const hexColor = useStoreState(state => state.color.hexColor);
  const dragonName = useStoreState(state => state.dragonName.dragonName);
  const species = useStoreState(state => state.species.species);
  return (
    <div>
      <div className="nes-container is-dark with-title is-centered is-rounded">
        <p className="title">
          {dragonName} the {species}
        </p>
        <p>
          <Baby color={hexColor} />
        </p>
        <MessageDisplay />
      </div>
    </div>
  );
};
