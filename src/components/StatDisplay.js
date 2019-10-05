import React from "react";
import { Button, ListGroup, ListGroupItem } from "reactstrap";

export const StatDisplay = props => {
  return (
    <div>
      <div className="nes-container is-dark is-rounded">
        <ListStats stats={props.stats} />
      </div>
      <div className="nes-container is-dark is-rounded">
        <ListActions actions={props.actions} onClick={props.onClick} />
      </div>
    </div>
  );
};

const ListStats = props => {
  return (
    <ListGroup style={{ listStyle: "none" }}>
      {props.stats.map(stat => (
        <ListGroupItem key={stat.id}>
          {stat.displayName}: {stat.value}
        </ListGroupItem>
      ))}
    </ListGroup>
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
