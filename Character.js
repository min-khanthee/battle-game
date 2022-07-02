import { getDiceRollArray, getDicePlaceholderHtml } from '/utils.js'

function Character(data) {
  Object.assign(this, data)

  this.takeDamage = function () {
    console.log(`${this.name} is damaged`)
  }

  this.diceArray = getDicePlaceholderHtml(this.diceCount)
  //methods on constructor function

  this.getDiceHtml = function (diceCount) {
    this.currentDiceScore = getDiceRollArray(this.diceCount)
    this.diceArray = this.currentDiceScore
      .map((num) => {
        return `<div class="dice">${num}</div>`
      })
      .join('')
  }

  this.getCharacterHtml = function () {
    const { elementId, name, avatar, health, diceCount, diceArray } = this
    const diceHtml = this.getDiceHtml(diceCount)

    return `<div class="character-card">
        <h4 class="name"> ${name} </h4>
        <img class="avatar" src="${avatar}" />
        <div class="health">health: <b> ${health} </b></div>
        <div class="dice-container">    
            ${diceArray}
        </div>
    </div>`
  }
}

export default Character
