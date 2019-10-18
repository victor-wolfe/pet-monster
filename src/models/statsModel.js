import { action, computed } from "easy-peasy";
import { statList } from "../shared/stats";
import { ACTIONS } from "../shared/actions";

const statsModel = {
  statList: statList,
  playerActions: ACTIONS,

  hunger: 100,
  hygiene: 100,
  happiness: 100,
  power: 0,
  intelligence: 0,
  discipline: 0,

  // minMaxer = computed(state => {
  //   if (state > 100)  {
  //     state = 100
  //   } else if (state < 0) {
  //     state = 0
  //   }
  // }),

  getHungry: action((state, payload) => {
    state.hunger -= 10;
    if (state.hunger < 0) {
      state.hunger = 0;
      state.happiness -= 10;
      if (state.happiness < 0) {
        state.happiness = 0;
      }
    }
    state.hygiene -= 5;
    if (state.hygiene < 0) {
      state.hygiene = 0;
    }
  }),

  updateStats: action((state, payload) => {
    switch (payload) {
      case "feed":
        state.hunger += 25;
        if (state.hunger > 110) {
          state.hunger = 110;
        }
        state.happiness += 5;
        if (state.happiness > 100) {
          state.happiness = 100;
        }
        break;
      case "groom":
        state.hygiene = 105;
        state.happiness += 5;
        if (state.happiness > 100) {
          state.happiness = 100;
        }
        break;
      case "pet":
        state.happiness = 100;
        break;
      case "exercise":
        state.power += 10;
        if (state.power > 100) {
          state.power = 100;
        }
        state.hygiene -= 10;
        if (state.hygiene < 0) {
          state.hygiene = 0;
        }
        break;
      case "educate":
        state.intelligence += 10;
        if (state.intelligence > 100) {
          state.intelligence = 100;
        }
        state.happiness -= 40;
        if (state.happiness < 0) {
          state.happiness = 0;
        }
        break;
      case "training":
        state.discipline += 10;
        if (state.discipline > 100) {
          state.discipline = 100;
        }
        state.happiness -= 40;
        if (state.happiness < 0) {
          state.happiness = 0;
        }
        break;
      default:
        break;
    }
  })
};

export default statsModel;
