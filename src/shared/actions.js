import * as FLAVORTEXT from "./flavortext";

export const ACTIONS = [
  {
    id: 1,
    name: "Feed",
    affectedStats: {
      hunger: 25
    },
    flavortext: FLAVORTEXT.feed,
    description: "+25 to hunger"
  },
  {
    id: 2,
    name: "Pet",
    affectedStats: {
      affection: 5
    },
    flavortext: FLAVORTEXT.pet,
    description: "+5 to affection"
  },
  {
    id: 3,
    name: "Train",
    affectedStats: {
      intelligence: 5,
      affection: -1
    },
    flavortext: FLAVORTEXT.train,
    description: "+5 to intelligence, -1 to affection"
  },
  {
    id: 4,
    name: "Groom",
    affectedStats: {
      selfEsteem: 5,
      affection: 1
    },
    flavortext: FLAVORTEXT.groom,
    description: "+5 to self-esteem, +1 to affection"
  }
];
