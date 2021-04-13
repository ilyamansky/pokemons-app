import React, { useContext } from "react";
import PokemonCard from "./PokemonCard";
import storeContext from "../Context";
import { observer } from "mobx-react-lite";
import { Container, Row } from "react-bootstrap";
import PokemonModal from "./PokemonModal";

const SearchResults = () => {
  const store = useContext(storeContext);
  if (store.queryStatus == false)
    return <p>No pokemon has been found! Try again!</p>;
  if (store.loadingPokemonSearch) return <div>...loading</div>;
  if (!store.query[store.index]) return null;

  return (
    <div>
      <Container>
        <Row
          style={{ marginTop: "10px" }}
          className="justify-content-md-center"
        >
          {store.query.map((el, i) => (
            <PokemonCard
              clicked={() => {
                store.changeSearchedIndex(i);
                store.changeShow();
              }}
              key={el.name}
              title={el.name}
              src={el.sprites.front_default}
              type={el.types.map((el) => `${el.type.name} `)}
            />
          ))}
        </Row>
      </Container>
      <PokemonModal
        title={store.query[store.index].name}
        src={store.query[store.index].sprites.front_default}
        backSrc={store.query[store.index].sprites.back_default}
        height={store.query[store.index].height}
        weight={store.query[store.index].weight}
        type={store.query[store.index].types.map((el) => `${el.type.name} `)}
      />
    </div>
  );
};
export default observer(SearchResults);
