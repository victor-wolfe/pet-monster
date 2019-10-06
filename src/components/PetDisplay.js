import React from "react";
import { myMonster } from "../shared/myMonster";

export const PetDisplay = props => {
  return (
    <div>
      <div className="nes-container is-dark with-title is-centered is-rounded">
        <p className="title">
          {myMonster.name} the {myMonster.species}
        </p>
        <p>
          <img src={myMonster.src} alt={myMonster.alt} />
        </p>
        <div className="nes-container is-dark is-rounded">{props.message}</div>
      </div>
    </div>
  );
};
