import { createStore } from "easy-peasy";
import colorModel from "../models/colorModel";
import dragonType from "../models/dragonType";
import statsModel from "../models/statsModel";
import timeModel from "../models/timeModel";

const storeModel = {
  color: colorModel,
  species: dragonType,
  stats: statsModel,
  time: timeModel
};

const store = createStore(storeModel);

export default store;
