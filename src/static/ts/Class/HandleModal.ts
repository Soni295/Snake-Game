import { HandleElement, iHandleElement } from './HandleElement.js';
import { Modal, iModal } from './Modal.js';
import { iGame } from './Game.js';
import { ID } from './id.js';

export interface iHandleModal {
  btn: iHandleElement;
  speedSelector: iHandleElement;
  modal: iModal;
  game: iGame;
  start(): void;
  selectSpeed(): number;
  showModal(): void;
}

export class HandleModal implements iHandleModal {
  btn: iHandleElement;
  speedSelector: iHandleElement;
  modal: iModal;
  game: iGame;

  constructor(game: iGame) {
    this.btn = new HandleElement(ID.BTN_MODAL);
    this.modal = new Modal(ID.MODAL);
    this.speedSelector = new HandleElement(ID.SPEED_SELECTOR);
    this.game = game;
    this.btn.element.onclick = () => this.start();
  }

  start(): void {
    this.modal.hideElement();
    this.game.start();
  }

  selectSpeed(): number {
    return Number(this.speedSelector.getValue());
  }
  showModal(): void {
    this.modal.showElement();
  }
}
