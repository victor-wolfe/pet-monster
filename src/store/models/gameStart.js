import { action } from "easy-peasy";

const gameStartModel = {
  gameStart: true,
  gameOver: false,

  toggleStart: action(state => {
    state.gameStart = false;
  })
};

export default gameStartModel;
