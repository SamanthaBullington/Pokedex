import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { sandbox } from "./AxiosService.js";

class MyPokemonService {


  async getMyPokemon() {
    const res = await sandbox.get("")
    console.log(res.data);
    ProxyState.myPokemon = res.data.map(p => new Pokemon(s))
  }

  async addPokemon(id) {
    const res = await sandbox.post(id)
    console.log(res.data);
    const newPokemon = new Pokemon(res.data)
    ProxyState.myPokemon = [...ProxyState.myPokemon, newPokemon]
    ProxyState.currentPokemon = newPokemon
  }

  setPokemon(id) {
    const pokemon = ProxyState.myPokemon.find(p => p.id === id)
    if (!pokemon) {
      throw new Error("invalid pokemon id")
    }
    ProxyState.currentPokemon = pokemon
    ProxyState.myPokemon = ProxyState.myPokemon
  }

  async removePokemon() {
    const res = await sandbox.delete(ProxyState.currentPokemon.id)
    ProxyState.myPokemon = ProxyState.myPokemon.filter(p => p.id != ProxyState.currentPokemon.id)
    ProxyState.currentPokemon = null
  }

}

export const myPokemonService = new MyPokemonService()
