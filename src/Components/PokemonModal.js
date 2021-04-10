import React, { useContext } from "react";
import PropTypes from "prop-types";
import { observer } from "mobx-react-lite";
import storeContext from "../Context";
import { Modal, Button } from "react-bootstrap";

const PokemonModal = (props) => {
  const store = useContext(storeContext);
  return (
    <div>
      <Modal animation={false} show={store.show} onHide={store.changeShow}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={props.src} />
          <img src={props.backSrc} />
          <p>weight: {props.weight}</p>
          <p>height: {props.height}</p>
          <p>type: {props.type}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={store.changeShow} variant="primary">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
PokemonModal.propTypes = {
  src: PropTypes.string,
  backSrc: PropTypes.string,
  weight: PropTypes.number,
  height: PropTypes.number,
  type: PropTypes.array,
  title: PropTypes.string,
};

export default observer(PokemonModal);
