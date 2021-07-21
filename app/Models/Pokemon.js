import { ProxyState } from "../AppState.js";

export default class Pokemon {
  constructor({ name, img, weight, height, types }) {
    this.name = name;
    this.img = img || `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
    this.weight = weight;
    this.height = height;
    this.types = types;


  }

}