import { Game, iGame } from './Game.js'
import { actionTypes } from './reducerSnake.js'

const snakeKeys: Array<string> = Object
  .keys(actionTypes)
  .map(key => actionTypes[key])

const scale: number = 10

const game: iGame = new Game(scale)

window.addEventListener("keydown", ({key}) => {
  key === 'p' && game.pauseGame()
  snakeKeys.some(move => move === key) && game.turn(key)
})
