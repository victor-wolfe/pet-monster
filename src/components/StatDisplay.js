import React from "react";
import { STYLES } from "../styles";

const TEST_STATS = {
  hunger: 100,
  rage: 100,
  odor: 100
};

//will take the real stats as a prop later
export const StatDisplay = () => {
  if (TEST_STATS.hunger > 0) {
    return (
      <div>
        Hunger: {TEST_STATS.hunger}
        <br />
        Rage: {TEST_STATS.rage}
        <br />
        Odor: {TEST_STATS.odor}
      </div>
    );
  } else {
    return <div>SO HUNGRY</div>;
  }
};

export default StatDisplay;
