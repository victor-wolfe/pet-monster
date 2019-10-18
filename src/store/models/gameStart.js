import { action } from "easy-peasy";

const gameStartModel = {
  gameStart: false,

  toggleStart: action(state => {
    state.gameStart = false;
  })
};

export default gameStartModel;
