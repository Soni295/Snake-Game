export interface iElement {
  element: HTMLElement
  getElement(): string
  setElement(value: string): void
}

export interface iCtrlElement extends iElement{
  data: number
  type: string
  handleData(value: number, set: boolean): void
  updateInfo(): void
  reset(): void
}

export interface imeasures {
  width: number
  height: number
}

export interface iCanvas {
  canvas: HTMLCanvasElement
  context: CanvasRenderingContext2D
  clearCanvas(): void
}
