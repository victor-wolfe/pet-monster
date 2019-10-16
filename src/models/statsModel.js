import { action } from "easy-peasy";
import { statList } from "../shared/stats";
import { ACTIONS } from "../shared/actions";

const statsModel = {
  statList: statList,
  playerActions: ACTIONS,

  getHungry: action(state => {
    statList[0].value -= 5;
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
