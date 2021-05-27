import { HandleModal } from './HandleModal.js';
import { Status } from './Status.js';
import { Egg } from './Egg.js';
import { Canvas } from './Canvas.js';
var scale = 20;
var Game = /** @class */ (function () {
    function Game(scale) {
        this.status = new Status();
        this.canvas = new Canvas(scale);
        this.egg = new Egg(this.canvas);
        this.modal = new HandleModal(this);
    }
    return Game;
}());
var game = new Game(scale);
