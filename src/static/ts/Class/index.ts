import { Game, iGame } from './Game.js'

const scale: number = 20

// const colors: iColors ={
//   snakeColor: '#FFFFFF',
//   eggColor: '#00ff14'
// }

const game: iGame = new Game(scale)

window.addEventListener("keydown", ({key}) => {
  key === 'p' && game.pauseGame()
})
