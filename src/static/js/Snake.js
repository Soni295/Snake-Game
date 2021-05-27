var Snake = /** @class */ (function () {
    function Snake(screen) {
        this.screen = screen;
    }
    Snake.prototype.start = function () {
        this.body = [{ x: 0, y: 0 }];
        this.ate = 3;
        this.tail = [];
        this.pause = false;
    };
    Snake.prototype.draw = function (color) {
        if (color === void 0) { color = '#FFFFFF'; }
        for (var _i = 0, _a = this.body; _i < _a.length; _i++) {
            var snake = _a[_i];
            this.screen.paintCanvas(snake, color);
        }
    };
    return Snake;
}());
export { Snake };
