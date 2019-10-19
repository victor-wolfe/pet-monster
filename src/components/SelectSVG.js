import React from "react";
import {
  Eye,
  Baby,
  Spikes,
  TwoHeads,
  Basic,
  SeaDragon,
  Teeth,
  Skeleton,
  SpikyTwo,
  Horns,
  TRex,
  GoatHorns,
  Wyvern,
  Quetzalcoatl,
  Hydra,
  SkinnyHydra
} from "./SVG";

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
    case "HUNGRY ONE":
      return <Teeth color={hexColor} />;
    case "Dead Dragon":
      return <Skeleton color={hexColor} />;
    case "Grand Dragon":
      return <SpikyTwo color={hexColor} />;
    case "Horned Dragon":
      return <Horns color={hexColor} />;
    case "...Dinosaur?":
      return <TRex color={hexColor} />;
    case "Dramgon":
      return <GoatHorns color={hexColor} />;
    case "Wyvern":
      return <Wyvern color={hexColor} />;
    case "Feathered Serpent":
      return <Quetzalcoatl color={hexColor} />;
    case "Hydra":
      return <Hydra color={hexColor} />;
    case "Lightning Hydra":
      return <SkinnyHydra color={hexColor} />;
    default:
      return <Baby color={hexColor} />;
  }
};

export default PetImage;
