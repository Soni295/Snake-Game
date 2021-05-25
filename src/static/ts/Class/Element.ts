import { iCtrlElement } from './Interfaces'
import { HandleElement } from './HandleElement'

export class CtrlElement extends HandleElement implements iCtrlElement {
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
