export interface IElement {
  element: HTMLElement
  getElement(): string
  setElement(value: string): void
}

interface iCtrlElement extends IElement{
  data: number
  type: string
  handleData(value: number, set: boolean): void
  updateInfo(): void
  reset(): void
}

class HandleElement implements IElement{
  element: HTMLElement

  constructor(id: string) {
    this.element = document.getElementById(id)
  }

  getElement(): string {
    return this.element.innerHTML
  }

  setElement(value: string): void {
    this.element.innerHTML = value
  }
}

class CtrlElement extends HandleElement implements iCtrlElement {
  data: number
  type: string

  constructor(id: string){
    super(id)
    this.data = 0
    this.type = `${id}: `
    this.updateInfo()
  }

  handleData(value: number, set: boolean=false): void {
    this.data = set ? value : this.data + value
    this.updateInfo()
  }

  updateInfo(): void {
    const newState:string = this.type + this.data.toString()
    this.setElement(newState)
  }

  reset(): void {
    this.data = 0
    this.updateInfo()
  }
}

const score:CtrlElement = new CtrlElement('score')
const speed:CtrlElement = new CtrlElement('speed')
