import characterData from '/data.js'
import Character from '/Character.js'
// Constructor function

const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)

document.getElementById('attack-button').addEventListener('click', attack)

function attack() {
  wizard.getDiceHtml()
  orc.getDiceHtml()
  wizard.takeDamage(orc.currentDiceScore)
  orc.takeDamage(wizard.currentDiceScore)
  render()
  if (orc.dead || wizard.dead) {
    endGame()
  }
}

function endGame() {
  console.log('is dead')
}

function render() {
  document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
  document.getElementById('monster').innerHTML = orc.getCharacterHtml()
}

render()
