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

const ListActions = props => {
  return (
    <ListGroup style={{ listStyle: "none" }}>
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
