import { reducer } from './reducerSnake.js';
var Snake = /** @class */ (function () {
    function Snake(screen, scale) {
        this.screen = screen;
        this.scale = scale;
    }
    Snake.prototype.start = function () {
        this.snake = {
            body: [{ x: 0, y: 0 }],
            direction: 'ArrowRight'
        };
        this.ate = 3;
        this.direction = '';
        this.pause = false;
        this.draw();
    };
    Snake.prototype.draw = function (color) {
        if (color === void 0) { color = '#FFFFFF'; }
        for (var _i = 0, _a = this.snake.body; _i < _a.length; _i++) {
            var snake = _a[_i];
            this.screen.paintCanvas(snake, color);
        }
    };
    Snake.prototype.update = function () {
        // for(let i=0; i< this.ate; i++){   }
        this.move();
        this.draw();
    };
    Snake.prototype.move = function () {
        this.snake = reducer(this.snake, this.scale);
    };
    return Snake;
}());
export { Snake };
