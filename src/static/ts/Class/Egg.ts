import { iCanvas, position } from './Canvas.js'

export interface iEgg {
  scale: number
  screen: iCanvas
  position?: position
  spawn(): void
  draw(color : string): void
}

const newPosition = (size: number, {height, width}: HTMLCanvasElement) => ({
  x: size * (Math.floor((Math.random() * height)/ size -1) +1),
  y: size * (Math.floor((Math.random() * width)/ size -1) +1)
})

export class Egg implements iEgg {
  scale: number
  screen: iCanvas
  position?: position

  constructor(screen: iCanvas){
    this.scale = screen.scale
    this.screen = screen
  }
  spawn(): void {
    this.position = newPosition(this.scale, this.screen.canvas)
    this.draw()
  }
  draw(color = "#00ff14") {
    this.screen.paintCanvas(this.position, color)
  }
}
