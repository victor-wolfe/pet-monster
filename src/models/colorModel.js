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

  handleChange: action((state, payload) => {
    state.color = payload.rgb;
    state.hexColor = payload.hex;
  })
};

export default colorModel;
