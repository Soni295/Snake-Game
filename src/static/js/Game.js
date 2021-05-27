import { HandleModal } from './HandleModal.js';
import { Status } from './Status.js';
import { Egg } from './Egg.js';
import { Canvas } from './Canvas.js';
import { Snake } from './Snake.js';
var scale = 20;
var colors = {
    snakeColor: '#FFFFFF',
    eggColor: '#00ff14'
};
var Game = /** @class */ (function () {
    function Game(scale) {
        this.status = new Status();
        this.canvas = new Canvas(scale);
        this.egg = new Egg(this.canvas);
        this.snake = new Snake(this.canvas, scale);
        this.modal = new HandleModal(this);
        this.run = null;
    }
    Game.prototype.start = function () {
        this.egg.spawn();
        this.snake.start();
        this.playing();
    };
    Game.prototype.playing = function () {
        var _this = this;
        if (!this.run) {
            this.run = setInterval(function () {
                _this.canvas.clearCanvas();
                _this.snake.update();
                _this.egg.draw();
            }, 500); // modificar
        }
    };
    Game.prototype.pause = function () {
        if (this.run !== null) {
            clearInterval(this.run);
            this.run = null;
        }
    };
    return Game;
}());
var game = new Game(scale);
setTimeout(function () {
    game.pause();
    console.log('pause');
}, 5000);
setTimeout(function () {
    game.playing();
    console.log('start');
}, 10000);
