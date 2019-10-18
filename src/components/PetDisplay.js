import React from "react";
import { Col, Row, Container } from "reactstrap";
import { useStoreState } from "easy-peasy";
import MessageDisplay from "./MessageDisplay";
import PetImage from "./SelectSVG";

export const PetDisplay = props => {
  const hexColor = useStoreState(state => state.color.hexColor);
  const dragonName = useStoreState(state => state.stats.dragonName);
  const species = useStoreState(state => state.stats.species);
  return (
    <Container
      style={{ overflow: "auto", position: "relative" }}
      className="nes-container is-dark with-title is-centered is-rounded"
    >
      <p className="title">
        {dragonName} the {species}
      </p>
      <Row>
        <Col style={{ width: "30%", float: "left" }}>
          <PetImage hexColor={hexColor} species={species} />
        </Col>
        <Col
          className="col-6"
          style={{ position: "relative", width: "69%", float: "left" }}
        >
          <MessageDisplay />
        </Col>
      </Row>
    </Container>
  );
};
