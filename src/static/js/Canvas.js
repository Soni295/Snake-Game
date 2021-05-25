var Canvas = /** @class */ (function () {
    function Canvas() {
        this.canvas = document.getElementById('screen');
        this.context = this.canvas.getContext('2d');
    }
    Canvas.prototype.clearCanvas = function () {
        var _a = this.canvas, width = _a.width, height = _a.height;
        this.context.clearRect(0, 0, width, height);
    };
    Canvas.prototype.setScale = function (value) {
        this.scale = value;
    };
    return Canvas;
}());
export { Canvas };
//# sourceMappingURL=Canvas.js.map