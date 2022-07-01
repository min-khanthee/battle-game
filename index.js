import characterData from '/data.js'
import Character from '/Character.js'
// Constructor function

const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)

document.getElementById('attack-button').addEventListener('click', attack)

function attack() {
  wizard.getDiceHtml()
  orc.getDiceHtml()
  render()
}

function render() {
  document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
  document.getElementById('monster').innerHTML = orc.getCharacterHtml()
}

render()
