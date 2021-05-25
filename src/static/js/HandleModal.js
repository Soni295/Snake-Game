import { HandleElement } from './HandleElement';
var HandleModal = /** @class */ (function () {
    function HandleModal() {
        this.btn = new HandleElement('btn-modal');
        this.btn.element.onclick = function () { return console.log('hola'); };
    }
    return HandleModal;
}());
export { HandleModal };
//# sourceMappingURL=HandleModal.js.map