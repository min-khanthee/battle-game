import characterData from '/data.js'
import Character from '/Character.js'
// Constructor function

const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)

function render() {
  document.getElementById(wizard.elementId).innerHTML = wizard.getCharacterHtml()
  document.getElementById(orc.elementId).innerHTML = orc.getCharacterHtml()
}

render()
