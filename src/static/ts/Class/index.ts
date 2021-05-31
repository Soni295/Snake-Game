import { Game, iGame } from './Game.js'
import { actionTypes } from './reducerSnake.js'

const lever: HTMLElement = document.getElementById('lever')
const base: HTMLElement = document.getElementById('base')

const snakeKeys: Array<string> = Object
  .keys(actionTypes)
  .map(key => actionTypes[key])

const scale: number = 20

const game: iGame = new Game(scale)

window.addEventListener("keydown", ({key}) => {
  key === 'p' && game.pauseGame()

  snakeKeys.some(move => move === key) && game.turn(key)

  switch(key){
    case 'ArrowRight':
      lever.style.transform = "rotate(45deg) translateX(10px)"
      base.style.transform = "rotate(315deg) translateX(-13px) translateY(-10px)"
      break
    case 'ArrowLeft':
      lever.style.transform = "rotate(-45deg) translateX(-10px)"
      base.style.transform = "rotate(45deg) translateX(-16px) translateY(16px)"
      break
    case 'ArrowDown':
    case 'ArrowUp':
      lever.style.setProperty('--ball-down', '-18px')
      break
    default:
  }
  setTimeout(()=> {
    lever.style.transform = ""
    base.style.transform = ""
    lever.style.setProperty('--ball-down', '-31px')
  }, 200)
})
