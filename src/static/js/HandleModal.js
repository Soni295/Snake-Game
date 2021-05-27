import { HandleElement } from './HandleElement.js';
import { Modal } from './Modal.js';
import { ID } from './id.js';
var HandleModal = /** @class */ (function () {
    function HandleModal(game) {
        var _this = this;
        this.btn = new HandleElement(ID.BTN_MODAL);
        this.modal = new Modal(ID.MODAL);
        this.game = game;
        this.btn.element.onclick = function () { return _this.start(); };
    }
    HandleModal.prototype.start = function () {
        this.modal.hideElement();
        console.log(this.game);
    };
    HandleModal.prototype.showModal = function () {
        this.modal.showElement();
    };
    return HandleModal;
}());
export { HandleModal };
