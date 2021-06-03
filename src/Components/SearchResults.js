import React, { useContext } from "react";
import PokemonCard from "./PokemonCard";
import storeContext from "../Context";
import { observer } from "mobx-react-lite";
import { Container, Row } from "react-bootstrap";
import PokemonModal from "./PokemonModal";

const SearchResults = () => {
  const store = useContext(storeContext);
  if (store.queryStatus === false)
    return <p>No pokemon has been found! Try again!</p>;
  if (store.loadingPokemonSearch) return <div>...loading</div>;
  if (store.query.length === 0) return null;

  return (
    <div>
      <Container>
        <Row
          style={{ marginTop: "10px" }}
          className="justify-content-md-center"
        >
          <PokemonCard
            clicked={() => {
              store.changeShow();
            }}
            key={store.query.name}
            title={store.query.name}
            src={store.query.sprites.front_default}
            type={store.query.types.map((el) => `${el.type.name} `)}
          />
        </Row>
      </Container>
      <PokemonModal
        title={store.query.name}
        src={store.query.sprites.front_default}
        backSrc={store.query.sprites.back_default}
        height={store.query.height}
        weight={store.query.weight}
        type={store.query.types.map((el) => `${el.type.name} `)}
      />
    </div>
  );
};
export default observer(SearchResults);
