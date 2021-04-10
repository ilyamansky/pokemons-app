import React from "react";
import PropTypes from "prop-types";
//import { observer } from "mobx-react-lite";
import { Card } from "react-bootstrap";

const PokemonCard = (props) => {
  return (
    <div>
      <Card onClick={props.clicked} bg={"info"} style={{ width: "14rem" }}>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Img src={props.src} />
          <Card.Text>{props.type}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
PokemonCard.propTypes = {
  clicked: PropTypes.func,
  title: PropTypes.string,
  src: PropTypes.string,
  type: PropTypes.array,
};

export default /*observer*/(PokemonCard);
