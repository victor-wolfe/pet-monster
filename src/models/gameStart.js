import { action } from "easy-peasy";

const gameStartModel = {
  gameStart: true,

  toggleStart: action(state => {
    state.gameStart = false;
  })
};

export default gameStartModel;
