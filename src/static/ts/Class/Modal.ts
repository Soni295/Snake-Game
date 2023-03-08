import { HandleElement, iHandleElement } from './HandleElement.js';

export interface iModal extends iHandleElement {
  hideElement(): void;
  showElement(): void;
}

export class Modal extends HandleElement implements iModal {
  constructor(id: string) {
    super(id);
  }

  hideElement(): void {
    this.element.classList.add('fade-out');
  }

  showElement(): void {
    this.element.classList.remove('fade-out');
    this.element.classList.add('fade-in');
  }
}
