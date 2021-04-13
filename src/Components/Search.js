import React, { useState, useEffect, useContext } from "react";
import storeContext from "../Context";
import { observer } from "mobx-react-lite";
import { Form, Button, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Search = () => {
  const store = useContext(storeContext);
  const history = useHistory();
  const [query, setQuery] = useState("");
  const onChangeHandler = (e) => {
    setQuery(e.target.value);
  };
  const onClickHandler = (e) => {
    e.preventDefault();
    store.getPokemon(query);
    store.SearchedIndexToNull();
    history.push("/search");
  };
  useEffect(() => {
    store.getAllPokemonNames();
  }, [store.count]);
  if (!store) return null;
  return (
    <div>
      <Container>
        <Form>
          <Form.Row>
            <div>
              <Form.Control
                onChange={onChangeHandler}
                type="search"
                placeholder="Enter pokemon name"
                value={query}
              />
            </div>
            <Button onClick={onClickHandler} type="submit">
              Search
            </Button>
          </Form.Row>
        </Form>
      </Container>
    </div>
  );
};

export default observer(Search);
