import React from "react";
import { Col, Row, Container } from "reactstrap";
import { useStoreState } from "easy-peasy";
import { Baby } from "./SVG";
import MessageDisplay from "./MessageDisplay";

export const PetDisplay = props => {
  const hexColor = useStoreState(state => state.color.hexColor);
  const dragonName = useStoreState(state => state.dragonName.dragonName);
  const species = useStoreState(state => state.species.species);
  return (
    <Container
      style={{ overflow: "auto", position: "relative" }}
      className="nes-container is-dark with-title is-centered is-rounded"
    >
      <p className="title">
        {dragonName} the {species}
      </p>
      <Row>
        <Col style={{ width: "50%", float: "left" }}>
          <Baby color={hexColor} />
        </Col>
        <Col
          className="col-6"
          style={{ position: "relative", width: "49%", float: "left" }}
        >
          <MessageDisplay />
        </Col>
      </Row>
    </Container>
  );
};
