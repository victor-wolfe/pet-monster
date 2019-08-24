import React from "react";
import { STYLES } from "../styles";

export let dragonStats = [
  {
    id: 0,
    name: "Hunger",
    value: 0
  },
  {
    id: 1,
    name: "Affection",
    value: 0
  },
  {
    id: 2,
    name: "Intelligence",
    value: 0
  }
];

const STARTER_STATS = {
  hunger: 10,
  affection: 0,
  intelligence: 0
};

//will take the real stats as a prop later
export const StatDisplay = props => {
  const statList = props.stats.map(stat => (
    <li key={stat.id}>
      {stat.name}: {stat.value}
    </li>
  ));
  return <ul>{statList}</ul>;
};

export default StatDisplay;
