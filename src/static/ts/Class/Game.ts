import { HandleModal, iHandleModal } from './HandleModal.js'
import { Status, iStatus } from './Status.js'
import { Egg, iEgg } from './Egg.js'
import { Canvas, iCanvas } from './Canvas.js'
import { Snake, iSnake } from './Snake.js'
import { iRules, Rules } from './Rules.js'

export interface iGame {
  status: iStatus
  canvas: iCanvas
  egg: iEgg
  snake: iSnake
  rules: iRules
  modal: iHandleModal
  run: ReturnType<typeof setInterval> | null
  pause: boolean
  start(): void
  playing(): void
  pauseGame(): void
  turn(key: string): void
  eat(): void
}

export class Game implements iGame {
  status: iStatus
  canvas: iCanvas
  egg: iEgg
  snake: iSnake
  rules: iRules
  modal: iHandleModal
  run: ReturnType<typeof setInterval> | null
  pause: boolean

  constructor(scale: number){
    this.status = new Status()
    this.canvas = new Canvas(scale)
    this.egg = new Egg(this.canvas)
    this.snake = new Snake(this.canvas, scale)
    this.rules = new Rules(this.snake, this.egg, this)
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
      this.rules.check()
      this.pause && clearInterval(this.run)
      this.canvas.clearCanvas()
      this.egg.draw()
      this.snake.update()
    }, 500)// modificar
  }

  pauseGame(): void {
    this.pause = !this.pause
    this.pause === false && this.playing()
  }

  turn(key: string): void{
    this.snake.turn(key)
  }
  eat(): void {
    this.snake.eat()
    this.egg.eat()
  }
}
