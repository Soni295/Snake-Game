import { position, iCanvas } from './Canvas.js'
import { reducer } from './reducerSnake.js'

export type character = {
  body: Array<position>
  direction: string
}

export interface iSnake {
  snake: character
  screen: iCanvas
  pause: boolean
  scale: number
  ate: number
  start(): void
  draw(color: string): void
  update(): void
  move(): void
}
export class Snake implements iSnake {
  ate: number
  snake: character
  pause: boolean
  scale: number
  screen: iCanvas
  direction: any

  constructor(screen: iCanvas, scale: number){
    this.screen = screen
    this.scale = scale
  }

  start(): void {
    this.snake = {
      body: [{x: 0, y: 0}],
      direction: 'ArrowRight'
    }
    this.ate = 3
    this.direction = ''
    this.pause = false
    this.draw()
  }

  draw(color: string='#FFFFFF'): void {
    for(const snake of this.snake.body){
      this.screen.paintCanvas(snake, color)
    }
  }

  update(): void {
    // for(let i=0; i< this.ate; i++){   }
    this.move()
    this.draw()
  }

  move(): void {
    this.snake = reducer(this.snake, this.scale)
  }
}
