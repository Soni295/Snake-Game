import { iElement } from './Interfaces'

export class HandleElement implements iElement{
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
