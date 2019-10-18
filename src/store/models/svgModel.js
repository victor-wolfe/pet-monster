import { action } from "easy-peasy";

const svgModel = {
    chooseSVG: action(state, payload) => {
        switch(state.image) {
            case "baby":
                return <Baby />
            default:
                return <Egg />
    }

};

export default svgModel;
