import { action } from "easy-peasy";

const timeModel = {
  time: "Morning",
  day: 1,

  changeTime: action(state => {
    switch (state.time) {
      case "Morning":
        state.time = "Afternoon";
        break;
      case "Afternoon":
        state.time = "Night";
        break;
      case "Night":
        state.day++;
        if (state.day == 4) {
          state.time = "Midnight";
        }
        state.time = "Morning";
        break;
      default:
        break;
    }
  })
};

export default timeModel;
