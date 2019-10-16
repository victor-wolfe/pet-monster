import { createStore } from "easy-peasy";
import colorModel from "../models/colorModel";
import nameModel from "../models/nameModel";
import dragonType from "../models/dragonType";
import statsModel from "../models/statsModel";
import timeModel from "../models/timeModel";

const storeModel = {
  color: colorModel,
  dragonName: nameModel,
  species: dragonType,
  stats: statsModel,
  time: timeModel
};

const store = createStore(storeModel);

export default store;
