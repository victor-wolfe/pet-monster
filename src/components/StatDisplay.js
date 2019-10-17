import React from "react";
import { Button, ListGroup, ListGroupItem } from "reactstrap";
import { useStoreState, useStoreActions } from "easy-peasy";

export const StatDisplay = () => {
  return (
    <div>
      <div className="nes-container is-dark is-rounded">
        <ListStats />
      </div>
      <div className="nes-container is-dark is-rounded">
        <ListActions />
      </div>
    </div>
  );
};

const ListStats = () => {
  const statList = useStoreState(state => state.stats.statList);
  return (
    <div>
      <ListGroup style={{ listStyle: "none" }}>
        {statList.map((stat, idx) => (
          <ListGroupItem key={idx}>
            {stat.displayName}: {stat.value}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

// class ListActions extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       toolTip: ""
//     };
//   }

//   mouseEnter = action => {
//     this.setState({ toolTip: action.description });
//   };
//   mouseLeave = () => {
//     this.setState({ toolTip: "" });
//   };

//   render() {
const ListActions = props => {
  const updateStats = useStoreActions(actions => actions.stats.updateStats);
  const playerActions = useStoreState(state => state.stats.playerActions);
  const statList = useStoreState(state => state.stats.statList);

  return (
    <div>
      {/* <div style={{ float: "right" }}>{this.state.toolTip}</div> */}
      <ListGroup style={{ listStyle: "none" }}>
        {playerActions.map(action => (
          <ListGroupItem key={action.id}>
            <Button
              className="nes-btn is-primary"
              onClick={() => updateStats(action)}
              // onMouseEnter={() => this.mouseEnter(action)}
              // onMouseLeave={() => this.mouseLeave()}
            >
              {action.name}
            </Button>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};
