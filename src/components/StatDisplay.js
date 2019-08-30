import React from "react";
import { Button, ListGroup, ListGroupItem } from "reactstrap";

export class StatDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: [
        {
          id: 0,
          name: "Hunger",
          value: 100,
          action: "Feed",
          actionValue: -5
        },
        {
          id: 1,
          name: "Affection",
          value: 0,
          action: "Pet",
          actionValue: 3
        },
        {
          id: 2,
          name: "Intelligence",
          value: 0,
          action: "Train",
          actionValue: 5
        }
      ],
      button: ""
    };
  }

  render() {
    return (
      <div>
        <div class="nes-container is-dark is-rounded">
          <ListGroup>
            <ListStats stats={this.state.stats} />
          </ListGroup>
        </div>
        <div class="nes-container is-dark is-rounded">
          <ListGroup>
            <ListActions stats={this.state.stats} />
          </ListGroup>
        </div>
      </div>
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

const ListActions = props => {
  const actionList = props.stats.map(stat => (
    <ListGroupItem>
      <Button className="nes-btn is-primary">
        {stat.action}: {stat.actionValue} {stat.name}
      </Button>
    </ListGroupItem>
  ));
  return <ul>{actionList}</ul>;
};
