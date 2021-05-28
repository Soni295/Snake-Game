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
  turn(key: string): void
  eat(): void
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
      body: [
        {x: this.scale * 2, y: 0},
        {x: this.scale , y: 0},
        {x: 0, y: 0}
      ],
      direction: 'ArrowRight'
    }
    this.ate = 0
    this.direction = ''
    this.pause = false
    this.draw()
  }

  draw(color: string='#FFFFFF'): void {
    for(const snake of this.snake.body){
      this.screen.paintCanvas(snake, color)
    }
  }
  generate(): void {
    const tail: number = this.snake.body.length -1
    const temp: any = this.snake.body.slice(0, tail)
    this.snake.body = [this.snake.body[0]].concat(temp)
  }

  update(): void {
    this.generate()
    this.move()
    this.draw()
  }

  move(): void {
    const action: {scale: number, type: string} = {
      scale: this.scale,
      type: this.snake.direction
    }
    this.snake.body[0] = reducer(this.snake.body[0],action)
  }
  turn(key: string) {
    this.snake.direction = key
  }
  eat(): void {
    this.ate++
    this.snake.body[this.snake.body.length] = this.snake.body[this.snake.body.length - 1 ]
  }
}
