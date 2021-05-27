import { HandleModal, iHandleModal } from './HandleModal.js'
import { Status, iStatus } from './Status.js'
import { Egg, iEgg } from './Egg.js'
import { Canvas, iCanvas } from './Canvas.js'
import { Snake, iSnake } from './Snake.js'

const scale: number = 20

interface iColors {
  snakeColor: string
  eggColor: string
}
const colors: iColors ={
  snakeColor: '#FFFFFF',
  eggColor: '#00ff14'
}

export interface iGame {
  status: iStatus
  canvas: iCanvas
  egg: iEgg
  snake: iSnake
  modal: iHandleModal
  start(): void
  playing(): void
  pause: boolean
  pauseGame(): void
  run: ReturnType<typeof setInterval> | null
}

class Game implements iGame {
  status: iStatus
  canvas: iCanvas
  egg: iEgg
  snake: iSnake
  modal: iHandleModal
  run: ReturnType<typeof setInterval> | null
  pause: boolean

  constructor(scale: number){
    this.status = new Status()
    this.canvas = new Canvas(scale)
    this.egg = new Egg(this.canvas)
    this.snake = new Snake(this.canvas, scale)
    this.modal = new HandleModal(this)
    this.pause = false
    this.run = null
  }

  start(): void {
    this.egg.spawn()
    this.snake.start()
    this.playing()
  }

  playing(): void {
    this.run = setInterval(()=> {
      this.pause && clearInterval(this.run)
      this.canvas.clearCanvas()
      this.snake.update()
      this.egg.draw()
    }, 500)// modificar
  }

  pauseGame(): void {
    this.pause = !this.pause
    if(this.pause === false) this.playing()
  }
}

const game: iGame = new Game(scale)

window.addEventListener("keydown", ({key}) => {
  key === 'p' && game.pauseGame()
})
