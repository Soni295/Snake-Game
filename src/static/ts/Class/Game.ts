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
  pause(): void
}

class Game implements iGame {
  status: iStatus
  canvas: iCanvas
  egg: iEgg
  snake: iSnake
  modal: iHandleModal
  run: ReturnType<typeof setInterval> | null

  constructor(scale: number){
    this.status = new Status()
    this.canvas = new Canvas(scale)
    this.egg = new Egg(this.canvas)
    this.snake = new Snake(this.canvas, scale)
    this.modal = new HandleModal(this)
    this.run = null
  }

  start(): void {
    this.egg.spawn()
    this.snake.start()
    this.playing()
  }

  playing(): void {
    if(!this.run){
      this.run = setInterval(()=> {
        this.canvas.clearCanvas()
        this.snake.update()
        this.egg.draw()
      }, 500)// modificar
    }
  }

  pause(): void {
    if(this.run !== null){
      clearInterval(this.run)
      this.run = null
    }
  }
}

const game: iGame = new Game(scale)

setTimeout(()=> {
  game.pause()
  console.log('pause')
}, 5000)

setTimeout(()=> {
  game.playing()
  console.log('start')
}, 10000)
