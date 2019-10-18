import React from "react";
import MainScreen from "./screens/MainScreen";
import StartScreen from "./screens/StartScreen";
import { useStoreState } from "easy-peasy";

function App() {
  const gameStart = useStoreState(state => state.start.gameStart);

  return (
    <div className="App">{gameStart ? <StartScreen /> : <MainScreen />}</div>
  );
}

export default App;
