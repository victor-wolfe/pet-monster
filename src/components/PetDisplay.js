import React from "react";
import { myMonster } from "../shared/myMonster";
import { Baby } from "./SVG";

export const PetDisplay = props => {
  return (
    <div>
      <div className="nes-container is-dark with-title is-centered is-rounded">
        <p className="title">
          {myMonster.name} the {myMonster.species}
        </p>
        <p>
          <Baby color={props.color} />
        </p>
        <div className="nes-container is-dark is-rounded">{props.message}</div>
      </div>
    </div>
  );
};
