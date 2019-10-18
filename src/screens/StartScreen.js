import React from "react";
import { Input, Button } from "reactstrap";
import { SliderPicker } from "react-color";
import { Egg } from "../components/SVG";
import { useStoreActions, useStoreState } from "easy-peasy";

const StartScreen = () => {
  const handleChange = useStoreActions(actions => actions.color.handleChange);
  const changeName = useStoreActions(actions => actions.stats.changeName);
  const toggleStart = useStoreActions(actions => actions.start.toggleStart);

  const color = useStoreState(state => state.color.color);
  const hexColor = useStoreState(state => state.color.hexColor);

  return (
    <div className="nes-container is-centered is-dark is-rounded">
      <h1>Choose Your Egg</h1>
      <Egg color={hexColor} />
      <div style={{ padding: 20, marginLeft: 20, marginRight: 20 }}>
        <SliderPicker color={color} onChange={handleChange} />
      </div>
      <div>
        <Input
          placeholder="I'll name it..."
          onChange={event => changeName(event.target.value)}
        />
        <Button onClick={toggleStart}>ENTER</Button>
      </div>
      <div className="nes-container is-rounded is-centered is-dark">
        When you are ready, press ENTER.
      </div>
    </div>
  );
};

export default StartScreen;
