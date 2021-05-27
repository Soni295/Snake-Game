import { position, iCanvas } from './Canvas.js'

export interface iSnake {
  body: Array<position>
  tail: Array<position>
  screen: iCanvas
  pause: boolean
  ate: number
  start(): void
  draw(color: string): void
}

export class Snake implements iSnake {
  body: Array<position>
  ate: number
  tail: Array<position>
  pause: boolean
  screen: iCanvas

  constructor(screen: iCanvas){
    this.screen = screen
  }

  start(): void {
    this.body = [{x: 0, y: 0}]
    this.ate = 3
    this.tail = []
    this.pause = false
  }

  draw(color: string='#FFFFFF'): void {
    for(const snake of this.body) {
      this.screen.paintCanvas(snake, color)
    }
  }
}
