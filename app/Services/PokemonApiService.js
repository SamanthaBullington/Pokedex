import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { pokemonApi } from "./AxiosService.js";


class PokemonApiService {
  async getAllPokemon() {
    let res = await pokemonApi.get()
    console.log(res.data.results)
    ProxyState.allPokemon = res.data.results
  }

  async getPokemon(id) {
    let res = await pokemonApi.get(id)
    console.log(res.data)
    ProxyState.currentPokemon = new Pokemon(res.data)
  }
}


export const pokemonApiService = new PokemonApiService()