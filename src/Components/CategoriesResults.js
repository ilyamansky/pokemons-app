import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import storeContext from "../Context";
import PokemonCard from "./PokemonCard";
import PokemonModal from "./PokemonModal";
import { Container, Row } from "react-bootstrap";

const CategoriesResults = () => {
  const store = useContext(storeContext);
  const [index, setIndex] = useState(0);
  if (store.pokemonsByTypeExist == true) return <div>No pokemons in this category yet!</div>
  if (store.state == "pending") return <div>Loading...</div>;
  
  
  if (!store.pokemonsByType[index]) return null;
  
  
  

  return (
    <div>
      <Container>
        <Row
          style={{ marginTop: "10px" }}
          className="justify-content-md-center"
        >
          {store.pokemonsByType.map((el, i) => (
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
        title={store.pokemonsByType[index].name}
        src={store.pokemonsByType[index].sprites.front_default}
        backSrc={store.pokemonsByType[index].sprites.back_default}
        height={store.pokemonsByType[index].height}
        weight={store.pokemonsByType[index].weight}
        type={store.pokemonsByType[index].types.map((el) => `${el.type.name} `)}
      />
    </div>
  );
};

export default observer(CategoriesResults);
