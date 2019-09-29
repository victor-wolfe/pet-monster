import React from "react";
import { Button, ListGroup, ListGroupItem } from "reactstrap";
import { STATS } from "../shared/stats";
import { ACTIONS } from "../shared/actions";

export class GameLogic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: STATS,
      actions: ACTIONS
    };
  }

  handleClick(props) {
    console.log(props);
  }

  render() {
    return (
      <StatDisplay stats={this.state.stats} actions={this.state.actions} />
    );
  }
}

export const StatDisplay = props => {
  return (
    <div>
      <div class="nes-container is-dark is-rounded">
        <ListGroup>
          <ListStats stats={props.stats} />
        </ListGroup>
      </div>
      <div class="nes-container is-dark is-rounded">
        <ListGroup>
          <ListActions actions={props.actions} />
        </ListGroup>
      </div>
    </div>
  );
};

const ListStats = props => {
  const statList = props.stats.map(stat => (
    <li key={stat.id}>
      {stat.name}: {stat.value}
    </li>
  ));
  return <ul>{statList}</ul>;
};

class ListActions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userAction: ""
    };
  }

  handleClick = action => {
    console.log(action.name);
    this.setState({
      userAction: "SCREAM INTO THE VOID"
    });
  };

  render() {
    return (
      <ListGroup>
        {this.props.actions.map(action => (
          <ListGroupItem>
            <Button
              className="nes-btn is-primary"
              onClick={() => this.handleClick(action)}
            >
              {action.name}: {JSON.stringify(action.affectedStats)}
            </Button>
          </ListGroupItem>
        ))}
      </ListGroup>
    );
  }
}
