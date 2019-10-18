import { createStore } from "easy-peasy";
import colorModel from "./models/colorModel";
import statsModel from "./models/statsModel";
import timeModel from "./models/timeModel";
import gameStartModel from "./models/gameStart";

const storeModel = {
  start: gameStartModel,
  color: colorModel,
  stats: statsModel,
  time: timeModel
};

const store = createStore(storeModel);

export default store;
