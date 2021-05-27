import { ID } from './id.js'

export interface position {
  x: number
  y: number
}
export interface iCanvas {
  canvas: HTMLCanvasElement
  context: CanvasRenderingContext2D
  scale: number
  clearCanvas(): void
  paintCanvas(position: position, color: string): void
}

export class Canvas implements iCanvas {
  canvas: HTMLCanvasElement
  context: CanvasRenderingContext2D
  scale: number

  constructor(scale: number) {
    this.canvas = <HTMLCanvasElement>document.getElementById(ID.SCREEN)
    this.context = this.canvas.getContext('2d')
    this.scale = scale
  }

  clearCanvas(): void {
    const {width, height} = this.canvas
    this.context.clearRect(0, 0, width, height)
  }
  paintCanvas(position: position, color: string){
    this.context.fillStyle = color;
    this.context.fillRect(position.x, position.y, this.scale, this.scale);
  }
}
