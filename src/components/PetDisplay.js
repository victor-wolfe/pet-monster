import React from "react";

const TEST_PET = {
  name: "Carl",
  species: "Dragon",
  src: "img/dragon.gif"
};

//will take the real stats as a prop later
export const PetDisplay = () => {
  return (
    <div className="container">
      <img src={TEST_PET.src} />
      <h1>
        {TEST_PET.name} the {TEST_PET.species}
      </h1>
    </div>
  );
};
