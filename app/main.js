import PokemonApiController from "./Controllers/PokemonApiController.js";
import MyPokemonController from "./Controllers/MyPokemonController.js";

class App {
  pokemonApiController = new PokemonApiController();

  myPokemonController = new MyPokemonController();
}

window["app"] = new App();
