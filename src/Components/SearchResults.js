import React, { useContext, useState } from "react";
import PokemonCard from "./PokemonCard";
import storeContext from "../Context";
import { observer } from "mobx-react-lite";
import { Container, Row } from "react-bootstrap";
import PokemonModal from "./PokemonModal";

const SearchResults = () => {
  const store = useContext(storeContext);
  const [index, setIndex] = useState(0);
  if (store.queryStatus == false)
    return <p>No pokemon has been found! Try again!</p>;
  if (store.loadingPokemonSearch) return <div>...loading</div>;
  if (!store.query[index]) return null;

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
                setIndex(i);
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
        title={store.query[index].name}
        src={store.query[index].sprites.front_default}
        backSrc={store.query[index].sprites.back_default}
        height={store.query[index].height}
        weight={store.query[index].weight}
        type={store.query[index].types.map((el) => `${el.type.name} `)}
      />
    </div>
  );
};
export default observer(SearchResults);
