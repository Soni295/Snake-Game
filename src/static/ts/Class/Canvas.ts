import { imeasures, iCanvas } from './Interfaces'
export class Canvas implements iCanvas {
  canvas: HTMLCanvasElement
  context: CanvasRenderingContext2D
  scale?: number

  constructor() {
    this.canvas = <HTMLCanvasElement>document.getElementById('screen')
    this.context = this.canvas.getContext('2d')
  }

  clearCanvas(): void {
    const {width, height}:imeasures = this.canvas
    this.context.clearRect(0, 0, width, height)
  }

  setScale(value: number): void{
    this.scale = value
  }
}
