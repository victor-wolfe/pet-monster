import React from "react";
import { Button, ListGroup, ListGroupItem } from "reactstrap";
import { useStoreState, useStoreActions } from "easy-peasy";

export const StatDisplay = props => {
  const playerActions = useStoreState(state => state.stats.playerActions);
  return (
    <div>
      <div className="nes-container is-dark is-rounded">
        <ListStats />
      </div>
      <div className="nes-container is-dark is-rounded">
        <ListActions actions={playerActions} onClick={props.onClick} />
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

class ListActions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toolTip: ""
    };
  }

  mouseEnter = action => {
    this.setState({ toolTip: action.description });
  };
  mouseLeave = () => {
    this.setState({ toolTip: "" });
  };

  render() {
    return (
      <div>
        <div style={{ float: "right" }}>{this.state.toolTip}</div>
        <ListGroup style={{ listStyle: "none" }}>
          {this.props.actions.map(action => (
            <ListGroupItem key={action.id}>
              <Button
                className="nes-btn is-primary"
                onClick={() => this.props.onClick(action)}
                onMouseEnter={() => this.mouseEnter(action)}
                onMouseLeave={() => this.mouseLeave()}
              >
                {action.name}
              </Button>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
