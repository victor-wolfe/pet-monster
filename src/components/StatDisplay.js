import React from "react";
import { Button, ListGroup, ListGroupItem } from "reactstrap";

export const StatDisplay = props => {
  return (
    <div>
      <div className="nes-container is-dark is-rounded">
        <ListGroup>
          <ListStats stats={props.stats} />
        </ListGroup>
      </div>
      <div className="nes-container is-dark is-rounded">
        <ListGroup>
          <ListActions actions={props.actions} onClick={props.onClick} />
        </ListGroup>
      </div>
    </div>
  );
};

const ListStats = props => {
  const statList = props.stats.map(stat => (
    <li key={stat.id}>
      {stat.displayName}: {stat.value}
    </li>
  ));
  return <ul>{statList}</ul>;
};

const ListActions = props => {
  return (
    <ListGroup>
      {props.actions.map(action => (
        <ListGroupItem key={action.id}>
          <Button
            className="nes-btn is-primary"
            onClick={() => props.onClick(action)}
          >
            {action.name}
          </Button>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};
