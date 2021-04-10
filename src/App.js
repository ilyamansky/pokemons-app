import "./App.css";
import React from "react";
import PokemonList from "./Components/PokemonList";
import Search from "./Components/Search";
import SearchResults from "./Components/SearchResults";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeButton from "./Components/HomeButton";
import { Container, Row } from "react-bootstrap";
import Categories from "./Components/Categories";
import CategoriesResults from "./Components/CategoriesResults";

const App = () =>  {
  return (
    <div className="App">
      <Router>
        <h5 style={{ marginTop: "5px" }}>Pokemons Application</h5>
        <Container>
          <Row>
            <HomeButton />
            <Categories />
            <Search />
          </Row>
        </Container>
        <Switch>
          <Route path="/search">
            <SearchResults />
          </Route>
          <Route path="/categories">
            <CategoriesResults />
          </Route>
          <Route path="/">
            <PokemonList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
