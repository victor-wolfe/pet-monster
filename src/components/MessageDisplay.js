import React from "react";
import { useStoreState } from "easy-peasy";

const MessageDisplay = props => {
  const dragonName = useStoreState(state => state.dragonName.dragonName);

  return (
    <div className="nes-container is-dark is-rounded">
      {dragonName} is looking up to you.
    </div>
  );
};

export default MessageDisplay;
