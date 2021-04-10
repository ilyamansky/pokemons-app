import React from "react";
import home from "../home.png";
import { useHistory } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const HomeButton = () => {
  const history = useHistory();
  const onClickHandler = () => {
    history.push("/home");
  };
  return (
    <div>
      <Container style={{ marginTop: "5px" }} onClick={onClickHandler}>
        <Row>
          <Col xs="auto">
            <img src={home} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeButton;
