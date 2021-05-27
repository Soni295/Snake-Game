import { ID } from './id.js';
var Canvas = /** @class */ (function () {
    function Canvas(scale) {
        this.canvas = document.getElementById(ID.SCREEN);
        this.context = this.canvas.getContext('2d');
        this.scale = scale;
    }
    Canvas.prototype.clearCanvas = function () {
        var _a = this.canvas, width = _a.width, height = _a.height;
        this.context.clearRect(0, 0, width, height);
    };
    Canvas.prototype.paintCanvas = function (position, color) {
        this.context.fillStyle = color;
        this.context.fillRect(position.x, position.y, this.scale, this.scale);
    };
    return Canvas;
}());
export { Canvas };
