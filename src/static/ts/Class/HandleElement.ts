export interface iHandleElement {
  element: HTMLElement
  getElement(): string
  setValueElement(value: string): void
}

export class HandleElement implements iHandleElement{
  element: HTMLElement

  constructor(id: string) {
    this.element = document.getElementById(id)
  }
  getElement(): string {
    return this.element.innerHTML
  }
  setValueElement(value: string): void {
    this.element.innerHTML = value
  }
}
