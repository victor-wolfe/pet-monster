import { action } from "easy-peasy";
import { healthStats, personalityStats } from "../shared/stats";
import { ACTIONS } from "../shared/actions";

const statsModel = {
  healthStats: [...healthStats, ...personalityStats],
  personalityStats: personalityStats,
  playerActions: ACTIONS,

  getHungry: action(state => {
    healthStats[0].value -= 5;
  })

  //   updateStats: action((state, payload) => {
  //     const affectedStatArray = Object.keys(payload.affectedStats);
  //     for (const statToChange of affectedStatArray) {
  //         for (const originalStat of personalityStats) {
  //             if (originalStat.name === statToChange) {

  //             }
  //         }
  //     }
  //   })
};

export default statsModel;
