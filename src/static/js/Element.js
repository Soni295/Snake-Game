"use strict";
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
exports.__esModule = true;
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
var CtrlElement = /** @class */ (function (_super) {
    __extends(CtrlElement, _super);
    function CtrlElement(id) {
        var _this = _super.call(this, id) || this;
        _this.data = 0;
        _this.type = id + ": ";
        _this.updateInfo();
        return _this;
    }
    CtrlElement.prototype.handleData = function (value, set) {
        if (set === void 0) { set = false; }
        this.data = set ? value : this.data + value;
        this.updateInfo();
    };
    CtrlElement.prototype.updateInfo = function () {
        var newState = this.type + this.data.toString();
        this.setElement(newState);
    };
    CtrlElement.prototype.reset = function () {
        this.data = 0;
        this.updateInfo();
    };
    return CtrlElement;
}(HandleElement));
var score = new CtrlElement('score');
var speed = new CtrlElement('speed');
//# sourceMappingURL=Element.js.map