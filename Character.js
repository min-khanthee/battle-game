import { getDiceRollArray, getDicePlaceholderHtml } from '/utils.js'

const getPercentage = (remainingHealth, maximumHealth) => (100 * remainingHealth) / maximumHealth

//Constructor function

function Character(data) {
  Object.assign(this, data)

  this.maxHealth = this.health

  this.takeDamage = function (attackScoreArray) {
    const totalAttackScore = attackScoreArray.reduce((total, num) => total + num)
    this.health -= totalAttackScore
    if (this.health <= 0) {
      this.dead = true
      this.health = 0
    }
    console.log(getPercentage(this.health, this.maxHealth))
  }
  this.diceArray = getDicePlaceholderHtml(this.diceCount)
  //methods on constructor function

  this.getHealthBarHtml = function () {
    const percent = getPercentage(this.health, this.maxHealth)
    console.log(percent)
  }

  this.getDiceHtml = function () {
    this.currentDiceScore = getDiceRollArray(this.diceCount)
    this.diceArray = this.currentDiceScore.map((num) => `<div class="dice">${num}</div>`).join('')
  }

  this.getCharacterHtml = function () {
    const { elementId, name, avatar, health, diceCount, diceArray } = this
    const healthBar = this.getHealthBarHtml()
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
