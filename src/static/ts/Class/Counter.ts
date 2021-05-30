import { HandleElement, iHandleElement } from './HandleElement.js'

export interface iCounter extends iHandleElement {
  data: number
  type: string
  handleData(value: number, set?: boolean): void
  updateInfo(): void
  reset(): void
  getData(): number
}

export class Counter extends HandleElement implements iCounter{
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
  getData(): number{
    return this.data
  }

  updateInfo(): void {
    const newState: string = this.type + this.data.toString()
    this.setValueElement(newState)
  }

  reset(): void {
    this.data = 0
    this.updateInfo()
  }
}
