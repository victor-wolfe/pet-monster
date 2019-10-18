import React from "react";
import { Eye, Baby, Spikes, TwoHeads, Basic, SeaDragon } from "./SVG";

const PetImage = ({ species, hexColor }) => {
  switch (species) {
    case "Baby Dragon":
      return <Baby color={hexColor} />;
    case "Dragon":
      return <Basic color={hexColor} />;
    case "Sea Dragon":
      return <SeaDragon color={hexColor} />;
    case "Spiky Dragon":
      return <Spikes color={hexColor} />;
    case "Two-Headed Dragon":
      return <TwoHeads color={hexColor} />;
    case "???":
      return <Eye color={hexColor} />;
    default:
      return <Baby color={hexColor} />;
  }
};

export default PetImage;
