import React from "react";

const PetImage = props => {
  switch (props.species) {
    case "egg":
      return <Egg />;
    case "baby":
      return <Baby />;
  }
};

export default PetImage;
