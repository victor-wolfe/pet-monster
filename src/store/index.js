import { createStore } from "easy-peasy";
import colorModel from "../models/colorModel";

const storeModel = {
  color: colorModel
};

const store = createStore(storeModel);

export default store;
