import React from "react";
import { Container, Button } from "reactstrap";
import { useStoreState, useStoreActions, useStore } from "easy-peasy";

export const StatDisplay = () => {
  const hunger = useStoreState(state => state.stats.hunger);
  const hygiene = useStoreState(state => state.stats.hygiene);
  const happiness = useStoreState(state => state.stats.happiness);
  const power = useStoreState(state => state.stats.power);
  const intelligence = useStoreState(state => state.stats.intelligence);
  const discipline = useStoreState(state => state.stats.discipline);

  const getHungry = useStoreActions(actions => actions.stats.getHungry);
  const changeTime = useStoreActions(actions => actions.time.changeTime);
  const updateStats = useStoreActions(actions => actions.stats.updateStats);

  return (
    <Container>
      <div className="nes-table-responsive">
        <table
          className="nes-table is-bordered is-dark is-centered"
          width="99%"
        >
          <tbody>
            <tr>
              <td>
                <StatusBarLabel value={hunger} label="Hunger" />
              </td>
              <td>
                <StatusBarLabel value={power} label="Power" />
              </td>
            </tr>
            <tr>
              <td>
                <StatusBarLabel value={hygiene} label="Hygiene" />
              </td>
              <td>
                <StatusBarLabel value={intelligence} label="Intelligence" />
              </td>
            </tr>
            <tr>
              <td>
                <StatusBarLabel value={happiness} label="Happiness" />
              </td>
              <td>
                <StatusBarLabel value={discipline} label="Discipline" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        className="nes-container is-dark is-rounded"
        onClick={() => {
          getHungry();
          changeTime();
        }}
      >
        <p>How will you spend your time with your dragon?</p>
        <Button
          className="nes-btn is-primary"
          onClick={() => updateStats("feed")}
        >
          Feeding
        </Button>
        <Button
          className="nes-btn is-primary"
          onClick={() => updateStats("groom")}
        >
          Grooming
        </Button>
        <Button
          className="nes-btn is-primary"
          onClick={() => updateStats("pet")}
        >
          Belly Rubs
        </Button>
        <Button
          className="nes-btn is-primary"
          onClick={() => updateStats("exercise")}
        >
          Exercise
        </Button>
        <Button
          className="nes-btn is-primary"
          onClick={() => updateStats("educate")}
        >
          Education
        </Button>
        <Button
          className="nes-btn is-primary"
          onClick={() => updateStats("training")}
        >
          Obedience Training
        </Button>
      </div>
    </Container>
  );
};

const StatusBarLabel = ({ value, label }) => {
  return (
    <div>
      {label}
      <StatusBar value={value} />
    </div>
  );
};

const StatusBar = ({ value }) => {
  let status;
  if (value >= 75) {
    status = 1;
  } else if (value >= 50) {
    status = 2;
  } else if (value >= 25) {
    status = 3;
  }

  switch (status) {
    case 1:
      return (
        <progress
          className="nes-progress is-primary"
          value={value}
          max="100"
          style={{ height: "25px" }}
        ></progress>
      );
    case 2:
      return (
        <progress
          className="nes-progress is-success"
          value={value}
          max="100"
          style={{ height: "25px" }}
        ></progress>
      );
    case 3:
      return (
        <progress
          className="nes-progress is-warning"
          value={value}
          max="100"
          style={{ height: "25px" }}
        ></progress>
      );
    default:
      return (
        <progress
          className="nes-progress is-error"
          value={value}
          max="100"
          style={{ height: "25px" }}
        ></progress>
      );
  }
};
