var HandleElement = /** @class */ (function () {
    function HandleElement(id) {
        this.element = document.getElementById(id);
    }
    HandleElement.prototype.getElement = function () {
        return this.element.innerHTML;
    };
    HandleElement.prototype.setElement = function (value) {
        this.element.innerHTML = value;
    };
    return HandleElement;
}());
export { HandleElement };
//# sourceMappingURL=HandleElement.js.map