import React from "react";

const TEST_PET = {
  name: "Bob",
  species: "Dragon",
  src: "img/dragon.gif",
  alt: "DAGRON"
};

export const PetDisplay = () => {
  return (
    <div className="nes-container is-dark with-title is-centered is-rounded">
      <p className="title">
        {TEST_PET.name} the {TEST_PET.species}
      </p>
      <p>
        <img src={TEST_PET.src} alt={TEST_PET.alt} />
      </p>
    </div>
  );
};
