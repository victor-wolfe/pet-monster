import { action } from "easy-peasy";
import { statList } from "../shared/stats";
import { ACTIONS } from "../shared/actions";

const statsModel = {
  statList: statList,
  playerActions: ACTIONS,

  getHungry: action(state => {
    statList[0].value -= 5;
  }),

  updateStats: action((state, payload) => {
    //names of the affected stats
    const affectedStatArray = Object.keys(payload.affectedStats);
    //loop through affected stats
    for (const statToChange of affectedStatArray) {
      console.log([...state.statList]);
      for (let originalStat of [...state.statList]) {
        if (originalStat.name === statToChange) {
          originalStat.value += payload.affectedStats[statToChange];
          console.log("orig stat value: " + originalStat.value);
          console.log("stat to change: " + payload.affectedStats[statToChange]);
          if (originalStat.value < 0) {
            originalStat.value = 0;
          } else if (originalStat.value > 100) {
            originalStat.value = 100;
          }
        }
      }
    }
  })
};

export default statsModel;
