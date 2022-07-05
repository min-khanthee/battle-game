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
  const endMessage =
    wizard.health === 0 && orc.health === 0
      ? 'No victors, all creatures are dead'
      : wizard.health > 0
      ? 'The Wizard wins'
      : 'The Orc is victorious!'

  console.log(endMessage)
}

function render() {
  document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
  document.getElementById('monster').innerHTML = orc.getCharacterHtml()
}

render()
