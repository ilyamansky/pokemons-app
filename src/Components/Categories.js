import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Form, Col } from "react-bootstrap";
import storeContext from "../Context";
import { useHistory } from "react-router-dom";

const Categories = () => {
  const store = useContext(storeContext);
  const history = useHistory();
  const [query, setQuery] = useState("choose one");
  const onChangeHandler = (e) => {
    setQuery(e.target.value);
    store.getPokemonsByType(e.target.value);
    e.target.value = 0;
    history.push("/categories");
  };
  useEffect(() => {
    store.getTypes();
  }, [store.typesUrl]);

  return (
    <div>
      <Form>
        <Form.Row className="justify-content-md-center">
          <Col xs="auto">
            <Form.Control onChange={onChangeHandler} as="select">
              <option value="0">Category: {query}</option>
              {store.types.map((el) => (
                <option key={el.name}>{el.name}</option>
              ))}
            </Form.Control>
          </Col>
        </Form.Row>
      </Form>
    </div>
  );
};

export default observer(Categories);
