import axios from "axios";
import { makeAutoObservable, runInAction } from "mobx";

class Store {
  state = "";
  query = [];
  queryStatus = true;
  pokemons = [];
  pokemonsUrls = [];
  currentUrl = "https://pokeapi.co/api/v2/pokemon/";
  show = false;
  typesUrl = "https://pokeapi.co/api/v2/type/";
  types = [];
  pokemonsByType = [];
  previousUrl = "";
  nextUrl = "";
  limit = "20";
  offset = "0";
  loadingPokemons = true;
  loadingPokemonTypes = false;
  loadingPokemonSearch = false;
  pokemonsByTypeExist = false;

  constructor() {
    makeAutoObservable(this);
  }

  changePages = (e) => {
    this.limit = e.target.value;
  };

  changeShow = () => {
    this.show = !this.show;
  };

  getPokemon = async (searchedInput) => {
    const input = searchedInput.toLowerCase().trim();
    this.loadingPokemonSearch = true;
    this.queryStatus = true;
    if (input === "") return (this.queryStatus = false);
    try {
      const result = await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${input}`)
        .then((res) => res.data);
      runInAction(() => {
        this.query = result;
        this.queryStatus = true;
        this.loadingPokemonSearch = false;
      });
    } catch (e) {
      runInAction(() => {
        this.queryStatus = true;
        this.loadingPokemonSearch = false;
        this.queryStatus = false;
      });
    }
  };
  getPokemons = async () => {
    this.state = "pending";
    const response = await axios
      .get(`${this.currentUrl}?limit=${this.limit}&offset=${this.offset}`)
      .then((res) => res.data);
    runInAction(() => {
      this.nextUrl = response.next;
      this.previousUrl = response.previous;
    });
    const urls = response.results.map((el) => el.url);
    const requests = urls.map((el) => axios.get(el));
    try {
      const results = await Promise.all(requests);
      runInAction(() => {
        this.pokemons = results.map((el) => el.data);
        this.state = "done";
      });
    } catch (e) {
      this.state = "error";
      console.log(e);
    }
  };

  goToPreviousUrl = () => {
    this.offset = +this.offset - +this.limit;
    if (+this.offset < 0) {
      this.offset = 0;
    }
  };
  goToNextUrl = () => {
    this.offset = +this.limit + +this.offset;
  };
  getTypes = async () => {
    const response = await axios
      .get(this.typesUrl)
      .then((res) => res.data.results);
    runInAction(() => {
      this.types = response;
    });
  };
  getPokemonsByType = async (type) => {
    this.loadingPokemonTypes = true;
    this.pokemonsByTypeExist = false;
    this.state = "pending";
    const response = await axios
      .get(`https://pokeapi.co/api/v2/type/${type}`)
      .then((res) => res.data.pokemon);
    runInAction(() => {
      if (response.length === 0) {
        this.state = "done";
        this.pokemonsByTypeExist = true;
      }
    });
    const urls = response.map((el) => el.pokemon.url);
    const requests = urls.map((el) => axios.get(el));
    try {
      const results = await Promise.all(requests);
      runInAction(() => {
        this.pokemonsByType = results.map((el) => el.data);
        this.state = "done";
      });
    } catch (e) {
      this.state = "error";
    }
  };
}
const store = new Store();
export default store;
