var newPosition = function (size, _a) {
    var height = _a.height, width = _a.width;
    return ({
        x: size * (Math.floor((Math.random() * height) / size - 1) + 1),
        y: size * (Math.floor((Math.random() * width) / size - 1) + 1)
    });
};
var Egg = /** @class */ (function () {
    function Egg(screen) {
        this.scale = screen.scale;
        this.screen = screen;
    }
    Egg.prototype.spawn = function () {
        this.position = newPosition(this.scale, this.screen.canvas);
        this.draw();
    };
    Egg.prototype.draw = function (color) {
        if (color === void 0) { color = "#00ff14"; }
        this.screen.paintCanvas(this.position, color);
    };
    return Egg;
}());
export { Egg };
