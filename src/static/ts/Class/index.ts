import { Game, iGame } from './Game.js'
import { actionTypes } from './reducerSnake.js'



const lever: HTMLElement = document.getElementById('lever')
const base: HTMLElement = document.getElementById('base')

const snakeKeys: Array<string> = Object
  .keys(actionTypes)
  .map(key => actionTypes[key])

const scale: number = 10

const game: iGame = new Game(scale)

window.addEventListener("keydown", ({key}) => {
  key === 'p' && game.pauseGame()

  snakeKeys.some(move => move === key) && game.turn(key)

  if(key === 'ArrowRight'){
    lever.style.transform = "rotate(45deg) translateX(10px)"
    base.style.transform = "rotate(315deg) translateX(-13px) translateY(-10px)"
    setTimeout(()=> {
      lever.style.transform = ""
      base.style.transform = ""
    }, 200)
  }

  if(key === 'ArrowLeft'){
    lever.style.transform = "rotate(-45deg) translateX(-10px)"
    base.style.transform = "rotate(45deg) translateX(-16px) translateY(16px)"
    setTimeout(()=> {
      lever.style.transform = ""
      base.style.transform = ""
    }, 200)
  }
})
