import React from "react";
import { useStoreState } from "easy-peasy";

const MessageDisplay = props => {
  const dragonName = useStoreState(state => state.stats.dragonName);
  const message = useStoreState(state => state.stats.message);

  return <div className="nes-container is-dark is-rounded">{message}</div>;
};

export default MessageDisplay;
