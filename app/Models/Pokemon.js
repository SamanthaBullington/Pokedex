import { ProxyState } from "../AppState.js";

export default class Pokemon {
  constructor({ name, id, img, weight, height, types }) {
    this.id = id;
    this.name = name;
    this.img = img || `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
    this.weight = weight;
    this.height = height;
    this.types = types;

  }

  get Template() {
    return `
      <div class="bg-light m-3 p-3 shadow">
          <div>
              <h4 class='uppercase'>${this.name}</h4>
              <p>${this.img}</p>
              <p>Types: [${this.types.join(", ")}]</p>
              <p>Height: ${this.height}</p>
              <p>Weight: ${this.weight}</p>
              
          <div class="text-right">
             ${this.Button}
          </div>
      </div>
    `
  }
  get Button() {
    const exists = ProxyState.myPokemon.find(p => p.name === ProxyState.currentPokemon.name)
    if (this.name) {
      return `
          <button type="button" class="btn btn-success" ${exists ? 'disabled' : ''} onclick="app.myPokemonController.addPokemon()">Catch Pokemon!</button>`
    }
    return `
      <button type="button" class="btn btn-danger" onclick="app.myPokemonController.removePokemon()">Release Pokemon</button>
    `
  }

}