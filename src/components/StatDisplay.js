import React from "react";
import { Button, ListGroup, ListGroupItem } from "reactstrap";

class GameLogic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: [
        {
          id: 0,
          name: "Hunger",
          value: 100
        },
        {
          id: 1,
          name: "Affection",
          value: 0
        },
        {
          id: 2,
          name: "Intelligence",
          value: 0
        }
      ],
      actions: [
        {
          id: 1,
          name: "Feed",
          affectedStats: {
            hunger: -5
          }
        },
        {
          id: 2,
          name: "Pet",
          affectedStats: {
            affection: 3
          }
        },
        {
          id: 3,
          name: "Train",
          affectedStats: {
            intelligence: 5,
            affection: -1
          }
        }
      ]
    };
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

export class StatDefinitions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: [
        {
          id: 0,
          name: "Hunger",
          value: 100
        },
        {
          id: 1,
          name: "Affection",
          value: 0
        },
        {
          id: 2,
          name: "Intelligence",
          value: 0
        }
      ],
      actions: [
        {
          id: 1,
          name: "Feed",
          affectedStats: {
            hunger: -5
          }
        },
        {
          id: 2,
          name: "Pet",
          affectedStats: {
            affection: 3
          }
        },
        {
          id: 3,
          name: "Train",
          affectedStats: {
            intelligence: 5,
            affection: -1
          }
        }
      ]
    };
  }

  performAction(stat, amount) {
    this.setState({
      stat.
    })
  }

  render() {
    return (
      <StatDisplay stats={this.state.stats} actions={this.state.actions} />
    );
  }
}

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

  handleClick = () => {
    this.setState({
      userAction: "SCREAM INTO THE VOID"
    });
    console.log();
  };

  render() {
    return (
      <ListGroup>
        {this.props.actions.map(action => (
          <ListGroupItem>
            <Button className="nes-btn is-primary" onClick={this.handleClick}>
              {action.name}: {JSON.stringify(action.affectedStats)}
            </Button>
          </ListGroupItem>
        ))}
      </ListGroup>
    );
  }
}

class changeStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
}
