import { action } from "easy-peasy";

const colorModel = {
  displayColorPicker: false,

  color: {
    r: "241",
    g: "112",
    b: "19",
    a: "1"
  },
  hexColor: "#F17013",

  handleClick: action(state => {
    state.displayColorPicker = !state.displayColorPicker;
  }),

  handleClose: action(state => {
    state.displayColorPicker = false;
  }),

  handleChange: action((state, payload) => {
    state.color = payload.rgb;
    state.hexColor = payload.hex;
  })
};

export default colorModel;
