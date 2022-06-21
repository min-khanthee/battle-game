const elementIdHero = 'hero'
const nameHero = 'Wizard'
const avatarHero = 'images/wizard.png'
const healthHero = '60'
const diceHero = 6

const elementId = 'monster'
const name = 'Orc'
const avatar = 'images/orc.png'
const health = '10'
const dice = 4

function renderCharacter(elementId, name, avatar, health, dice) {
  document.getElementById(elementId).innerHTML = `
        <div class="character-card">
          <h4 class="name">${name}</h4>
          <img class="avatar" src="${avatar}" />
          <p class="health">health: <b> ${health} </b></p>
          <div class="dice-container"><div class="dice">${dice}</div></div>
        </div>
`
}

renderCharacter('hero', 'Wizard', 'images/wizard.png', '60', 6)

renderCharacter('monster', 'Orc', 'images/orc.png', '10', 4)
