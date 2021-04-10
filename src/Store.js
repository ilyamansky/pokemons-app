import axios from "axios";
import { makeAutoObservable, runInAction } from "mobx";

class Store {
  count = 0;
  query = [];
  queryStatus = true;
  pokemons = [];
  allPokemonNames = [];
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

  constructor() {
    makeAutoObservable(this);
  }

  getCount = async () => {
    const response = await axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.data.count);
    runInAction(() => {
      this.count = response;
    });
  };

  getAllPokemonNames = async () => {
    this.getCount();
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=${this.count}`)
      .then((res) => {
        this.allPokemonNames = res.data.results.map((el) => el.name);
      });
  };

  changePages = (e) => {
    this.limit = e.target.value;
  };

  changeShow = () => {
    this.show = !this.show;
  };

  getPokemon = async (input) => {
    this.loadingPokemonSearch = true;
    this.queryStatus = true;
    const searchedPokemons = this.allPokemonNames.filter((el) =>
      el.includes(input.toLowerCase().trim())
    );
    if (searchedPokemons.length == 0) return (this.queryStatus = false);
    if (input.trim() == "") return (this.queryStatus = false);
    try {
      const requests = searchedPokemons.map((el) =>
        axios.get(`https://pokeapi.co/api/v2/pokemon/${el}`)
      );
      const results = await Promise.all(
        requests.map((el) => el.catch((e) => e))
      );
      runInAction(() => {
        this.query = results.map((el) => el.data);
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
    this.loadingPokemons = true;
    const response = await axios
      .get(`${this.currentUrl}?limit=${this.limit}&offset=${this.offset}`)
      .then((res) => res.data);
    runInAction(() => {
      this.nextUrl = response.next;
      this.previousUrl = response.previous;
    });
    const urls = response.results.map((el) => el.url);
    const requests = urls.map((el) => axios.get(el));
    const results = await Promise.all(requests.map((el) => el.catch((e) => e)));
    const validResults = results.filter((result) => !(result instanceof Error));
    runInAction(() => {
      this.pokemons = validResults.map((el) => el.data);
      this.loadingPokemons = false;
    });
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
    const response = await axios
      .get(`https://pokeapi.co/api/v2/type/${type}`)
      .then((res) => res.data.pokemon);
    const urls = response.map((el) => el.pokemon.url);
    const requests = urls.map((el) => axios.get(el));
    const results = await Promise.all(requests.map((el) => el.catch((e) => e)));
    const validResults = results.filter((result) => !(result instanceof Error));
    runInAction(() => {
      this.pokemonsByType = validResults.map((el) => el.data);
      this.loadingPokemonTypes = false;
    });
  };
}
const store = new Store();
export default store;
