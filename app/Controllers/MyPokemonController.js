import { ProxyState } from "../AppState.js"
import { myPokemonService } from "../Services/MyPokemonService.js"



function _drawAll() {
  const pokemon = ProxyState.myPokemon
  const currentPokemon = ProxyState.currentPokemon || {}
  let template = ""
  pokemon.forEach(s => template += `<li class="action ${currentPokemon.id === p.id ? 'text-primary' : ''}" onclick="app.myPokemonController.setPokemon('${p.name}')">${p.name}</li>`)
  if (!template) {
    template += '<p><em>No Pokemon Caught<em></p>'
  }
  document.getElementById("my-pokemon").innerHTML = template
}

export default class MyPokemonController {
  constructor() {
    ProxyState.on('myPokemon', _drawAll)
    this.getMyPokemon()
  }
  async getMyPokemon() {
    try {
      await myPokemonService.getMyPokemon()
    } catch (error) {
      console.error("failed to get sandbox pokemon")
    }
  }

  async addPokemon() {
    try {
      await myPokemonService.addPokemon()
    } catch (error) {
      console.error("something went wrong in adding that pokemon")
    }
  }

  setPokemon(id) {
    try {
      myPokemonService.setPokemon(id)
    } catch (error) {
      console.error('invalid  pokemon id')
    }
  }

  async removePokemon() {
    try {
      await myPokemonService.removePokemon()
    } catch (error) {
      console.error('invalid id')
    }
  }

}