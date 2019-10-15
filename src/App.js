import React from "react";
import { MainScreen } from "./components/MainScreen";
import StartScreen from "./components/StartScreen";

function App() {
  return (
    // <Router>
    //   <Switch>
    //     <Route path="/" />
    //   </Switch>
    // </Router>
    <div className="App">
      <StartScreen />
      {/* <MainScreen /> */}
    </div>
  );
}

export default App;
