var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { HandleElement } from './HandleElement.js';
var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal(id) {
        return _super.call(this, id) || this;
    }
    Modal.prototype.hideElement = function () {
        this.element.classList.add('fade-out');
    };
    Modal.prototype.showElement = function () {
        this.element.classList.remove('fade-out');
        this.element.classList.add('fade-in');
    };
    return Modal;
}(HandleElement));
export { Modal };
