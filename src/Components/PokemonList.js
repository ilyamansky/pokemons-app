import React, { useContext, useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import storeContext from "../Context";
import { observer } from "mobx-react-lite";
import { Row, Container } from "react-bootstrap";
import PokemonModal from "./PokemonModal";
import PokemonsPagination from "./PokemonsPagination";
import Paginator from "./Paginator";

const PokemonList = () => {
  const store = useContext(storeContext);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    store.getPokemons();
  }, [
    store.currentUrl,
    store.nextUrl,
    store.previousUrl,
    store.limit,
    store.offset,
  ]);
  if (store.state === "pending") return <div>Loading...</div>;
  if (!store.pokemons[index]) return null;
  return (
    <div>
      <Container>
        <Row
          style={{
            marginTop: "10px",
            marginBottom: "-14px",
            marginLeft: "-5px",
          }}
        >
          <PokemonsPagination />
          <Paginator />
        </Row>
        <Row className="justify-content-md-center">
          {store.pokemons.map((el, i) => (
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
        <Row
          style={{ marginLeft: "-5px", marginTop: "2px", marginBottom: "10px" }}
        >
          <PokemonsPagination />
        </Row>
      </Container>
      <PokemonModal
        height={store.pokemons[index].height}
        title={store.pokemons[index].name}
        weight={store.pokemons[index].weight}
        src={store.pokemons[index].sprites.front_default}
        backSrc={store.pokemons[index].sprites.back_default}
        type={store.pokemons[index].types.map((el) => `${el.type.name} `)}
      />
    </div>
  );
};

export default observer(PokemonList);
