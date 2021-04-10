import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import storeContext from "../Context";
import { Form, Col } from "react-bootstrap";

const Paginator = () => {
  const store = useContext(storeContext);
  return (
    <div>
      <Form>
        <Form.Row>
          <Col xs="auto">
            <Form.Control onChange={store.changePages} as="select">
              <option>pages: {store.limit}</option>
              <option>10</option>
              <option>20</option>
              <option>50</option>
            </Form.Control>
          </Col>
        </Form.Row>
      </Form>
    </div>
  );
};

export default observer(Paginator);
