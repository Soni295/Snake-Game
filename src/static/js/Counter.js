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
var Counter = /** @class */ (function (_super) {
    __extends(Counter, _super);
    function Counter(id) {
        var _this = _super.call(this, id) || this;
        _this.data = 0;
        _this.type = id + ": ";
        _this.updateInfo();
        return _this;
    }
    Counter.prototype.handleData = function (value, set) {
        if (set === void 0) { set = false; }
        this.data = set ? value : this.data + value;
        this.updateInfo();
    };
    Counter.prototype.updateInfo = function () {
        var newState = this.type + this.data.toString();
        this.setValueElement(newState);
    };
    Counter.prototype.reset = function () {
        this.data = 0;
        this.updateInfo();
    };
    return Counter;
}(HandleElement));
export { Counter };