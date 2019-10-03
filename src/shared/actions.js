import * as FLAVORTEXT from "./flavortext";

export const ACTIONS = [
  {
    id: 1,
    name: "Feed",
    affectedStats: {
      hunger: 25
    },
    flavortext: FLAVORTEXT.feed
  },
  {
    id: 2,
    name: "Pet",
    affectedStats: {
      affection: 5
    },
    flavortext: FLAVORTEXT.pet
  },
  {
    id: 3,
    name: "Train",
    affectedStats: {
      intelligence: 5,
      affection: -1
    },
    flavortext: FLAVORTEXT.train
  },
  {
    id: 4,
    name: "Groom",
    affectedStats: {
      selfEsteem: 5,
      affection: 1
    },
    flavortext: FLAVORTEXT.groom
  }
];
