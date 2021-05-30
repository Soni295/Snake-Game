export interface iHandleElement {
  element: HTMLInputElement
  getElement(): string
  setValueElement(value: string): void
  getValue(): string
}

export class HandleElement implements iHandleElement{
  element: HTMLInputElement

  constructor(id: string) {
    this.element = (<HTMLInputElement>document.getElementById(id))
  }
  getElement(): string {
    return this.element.innerHTML
  }
  getValue(): any{
    return this.element.value
  }
  setValueElement(value: string): void {
    this.element.innerHTML = value
  }
}
