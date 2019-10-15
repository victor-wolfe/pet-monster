import React from "react";
import { Input, Button } from "reactstrap";
import reactCSS from "reactcss";
import { SliderPicker } from "react-color";
import { Egg } from "./SVG";
import { useStoreActions, useStoreState } from "easy-peasy";

const StartScreen = () => {
  const handleChange = useStoreActions(actions => actions.color.handleChange);

  const color = useStoreState(state => state.color.color);

  const hexColor = useStoreState(state => state.color.hexColor);
  const styles = reactCSS({
    default: {
      color: {
        width: "50px",
        height: "50px",
        borderRadius: "2px",
        background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`
      },
      swatch: {
        padding: "5px",
        background: "#fff",
        borderRadius: "1px",
        boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
        display: "inline-block",
        cursor: "pointer"
      },
      popover: {
        position: "absolute",
        zIndex: "2"
      },
      cover: {
        // position: "relative",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px"
      }
    }
  });

  return (
    <div className="nes-container is-centered is-dark">
      <h1>Choose Your Egg</h1>
      <Egg color={hexColor} />
      <div style={{ padding: 20, marginLeft: 20, marginRight: 20 }}>
        <SliderPicker color={color} onChange={handleChange} />
      </div>
      <div>
        <Input placeholder="I'll name it..." />
        <Button>ENTER</Button>
      </div>
      <div className="nes-container is-centered is-dark">
        When you are ready, press Enter.
      </div>
    </div>
  );
};

export default StartScreen;
