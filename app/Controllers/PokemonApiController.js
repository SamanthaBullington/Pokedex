import { ProxyState } from "../AppState.js";
import { pokemonApiService } from "../Services/PokemonApiService.js";


function _drawAll() {
  const pokemon = ProxyState.allPokemon
  let template = ''
  pokemon.forEach(p => template += `<li class="action" onclick="app.pokemonApiController.getPokemon('${p.id}')">${p.name}</li>`)
  document.getElementById('api-pokemon').innerHTML = template
}
function _drawCurrentPokemon() {
  if (!ProxyState.currentPokemon) {
    document.getElementById('current-pokemon').innerHTML = '<div class="text-center"><em>No Pokemon Selected</em></div>'
    return
  }
  document.getElementById('current-pokemon').innerHTML = ProxyState.currentPokemon.Template
}


export default class PokemonApiController {
  constructor() {
    ProxyState.on('allPokemon', _drawAll)
    ProxyState.on('currentPokemon', _drawCurrentPokemon)

    this.getAllPokemon()
  }

  async getAllPokemon() {
    try {
      await pokemonApiService.getAllPokemon();
    } catch (error) {
      console.error('There was an Issue getting pokemon')
    }
  }

  async getPokemon(id) {
    try {
      await pokemonApiService.getPokemon(id)
    } catch (error) {
      console.error("unable to get pokemon details")
    }
  }
}