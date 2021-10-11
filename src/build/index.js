(function () {
    'use strict';

    var HandleElement = /** @class */ (function () {
        function HandleElement(id) {
            this.element = document.getElementById(id);
        }
        HandleElement.prototype.getElement = function () {
            return this.element.innerHTML;
        };
        HandleElement.prototype.getValue = function () {
            return this.element.value;
        };
        HandleElement.prototype.setValueElement = function (value) {
            this.element.innerHTML = value;
        };
        return HandleElement;
    }());

    var __extends$1 = (undefined && undefined.__extends) || (function () {
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
    var Modal = /** @class */ (function (_super) {
        __extends$1(Modal, _super);
        function Modal(id) {
            return _super.call(this, id) || this;
        }
        Modal.prototype.hideElement = function () {
            this.element.classList.add('fade-out');
        };
        Modal.prototype.showElement = function () {
            this.element.classList.remove('fade-out');
            this.element.classList.add('fade-in');
        };
        return Modal;
    }(HandleElement));

    var ID = {
        SCORE: 'score',
        SPEED: 'speed',
        SCREEN: 'screen',
        MODAL: 'modal',
        BTN_MODAL: 'btn-modal',
        SPEED_SELECTOR: 'speed-selector'
    };

    var HandleModal = /** @class */ (function () {
        function HandleModal(game) {
            var _this = this;
            this.btn = new HandleElement(ID.BTN_MODAL);
            this.modal = new Modal(ID.MODAL);
            this.speedSelector = new HandleElement(ID.SPEED_SELECTOR);
            this.game = game;
            this.btn.element.onclick = function () { return _this.start(); };
        }
        HandleModal.prototype.start = function () {
            this.modal.hideElement();
            this.game.start();
        };
        HandleModal.prototype.selectSpeed = function () {
            return Number(this.speedSelector.getValue());
        };
        HandleModal.prototype.showModal = function () {
            this.modal.showElement();
        };
        return HandleModal;
    }());

    var __extends = (undefined && undefined.__extends) || (function () {
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
        Counter.prototype.getData = function () {
            return this.data;
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

    var Status = /** @class */ (function () {
        function Status() {
            this.score = new Counter(ID.SCORE);
            this.speed = new Counter(ID.SPEED);
        }
        Status.prototype.eat = function (eggs) {
            if (eggs % 5 === 0)
                this.speed.handleData(1);
            this.score.handleData(this.speed.data * 5);
        };
        Status.prototype.setSpeed = function (num) {
            this.speed.handleData(num, true);
        };
        Status.prototype.getSpeed = function () {
            return this.speed.getData();
        };
        Status.prototype.reset = function () {
            this.score.reset();
        };
        return Status;
    }());

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
        Egg.prototype.eat = function () {
            this.spawn();
        };
        return Egg;
    }());

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

    var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };
    var actionTypes = {
        ARROWUP: 'ArrowUp',
        ARROWDOWN: 'ArrowDown',
        ARROWLEFT: 'ArrowLeft',
        ARROWRIGHT: 'ArrowRight'
    };
    var reducer = function (snake, action) {
        var _a, _b;
        var _c = snake.body, head = _c[0]; _c[1]; var neck = _c[2];
        var cases = (_a = {},
            _a[actionTypes.ARROWUP] = function (direction) { return ({
                body: __spreadArrays([
                    { x: head.x, y: head.y - action.scale }
                ], snake.body.slice(1)),
                direction: direction
            }); },
            _a[actionTypes.ARROWDOWN] = function (direction) { return ({
                body: __spreadArrays([
                    { x: head.x, y: head.y + action.scale }
                ], snake.body.slice(1)),
                direction: direction
            }); },
            _a[actionTypes.ARROWLEFT] = function (direction) { return ({
                body: __spreadArrays([
                    { x: head.x - action.scale, y: head.y }
                ], snake.body.slice(1)),
                direction: direction
            }); },
            _a[actionTypes.ARROWRIGHT] = function (direction) { return ({
                body: __spreadArrays([
                    { x: head.x + action.scale, y: head.y }
                ], snake.body.slice(1)),
                direction: direction
            }); },
            _a);
        var setMove = (_b = {},
            _b[actionTypes.ARROWLEFT] = function () { return head.x === neck.x + action.scale
                ? snake.direction
                : actionTypes.ARROWLEFT; },
            _b[actionTypes.ARROWRIGHT] = function () { return head.x === neck.x - action.scale
                ? snake.direction
                : actionTypes.ARROWRIGHT; },
            _b[actionTypes.ARROWDOWN] = function () { return head.y === neck.y - action.scale
                ? snake.direction
                : actionTypes.ARROWDOWN; },
            _b[actionTypes.ARROWUP] = function () { return head.y === neck.y + action.scale
                ? snake.direction
                : actionTypes.ARROWUP; },
            _b);
        var newDirection = setMove[action.type]();
        return cases[newDirection](newDirection);
    };

    var Snake = /** @class */ (function () {
        function Snake(screen, scale) {
            this.screen = screen;
            this.scale = scale;
        }
        Snake.prototype.start = function () {
            this.snake = {
                body: [
                    { x: this.scale * 2, y: 0 },
                    { x: this.scale, y: 0 },
                    { x: 0, y: 0 }
                ],
                direction: 'ArrowRight'
            };
            this.ate = 0;
            this.arrow = 'ArrowRight';
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
        Snake.prototype.generate = function () {
            var tail = this.snake.body.length - 1;
            var temp = this.snake.body.slice(0, tail);
            this.snake.body = [this.snake.body[0]].concat(temp);
        };
        Snake.prototype.update = function () {
            this.generate();
            this.move();
            this.draw();
        };
        Snake.prototype.move = function () {
            var action = {
                scale: this.scale,
                type: this.arrow
            };
            //this.snake.body[0] = reducer(head, neck, action)
            this.snake = reducer(this.snake, action);
        };
        Snake.prototype.turn = function (key) {
            this.arrow = key;
        };
        Snake.prototype.eat = function () {
            this.ate++;
            this.snake.body[this.snake.body.length] = this.snake.body[this.snake.body.length - 1];
        };
        return Snake;
    }());

    var Rules = /** @class */ (function () {
        function Rules(snake, egg, game) {
            this.snake = snake;
            this.egg = egg;
            this.game = game;
            this.width = this.game.canvas.canvas.width;
            this.height = this.game.canvas.canvas.height;
        }
        Rules.prototype.check = function () {
            var _a = this.snake.snake.body
                .map(function (part) { return JSON.stringify(part); }), head = _a[0], body = _a.slice(1);
            this.eatEgg(head);
            this.eatItSelf(head, body);
            this.limit(head);
        };
        Rules.prototype.eatItSelf = function (head, body) {
            body.some(function (part) { return part == head; }) && this.game.endGame();
        };
        Rules.prototype.eatEgg = function (head) {
            var egg = JSON.stringify(this.egg.position);
            head === egg && this.game.eat();
        };
        Rules.prototype.limit = function (head) {
            var headSnake = JSON.parse(head);
            switch (true) {
                case headSnake.x >= this.width:
                case headSnake.x < 0:
                case headSnake.y >= this.height:
                case headSnake.y < 0:
                    this.game.endGame();
                    break;
            }
        };
        return Rules;
    }());

    var Game = /** @class */ (function () {
        function Game(scale) {
            this.status = new Status();
            this.canvas = new Canvas(scale);
            this.egg = new Egg(this.canvas);
            this.snake = new Snake(this.canvas, scale);
            this.rules = new Rules(this.snake, this.egg, this);
            this.modal = new HandleModal(this);
            this.pause = false;
            this.run = null;
        }
        Game.prototype.start = function () {
            this.canvas.clearCanvas();
            this.egg.spawn();
            this.snake.start();
            this.status.setSpeed(this.modal.selectSpeed());
            this.playing();
        };
        Game.prototype.updateSpeed = function () {
            clearInterval(this.run);
            this.playing();
        };
        Game.prototype.playing = function () {
            var _this = this;
            this.run = setInterval(function () {
                _this.rules.check();
                _this.canvas.clearCanvas();
                _this.egg.draw();
                _this.snake.update();
            }, 1000 / this.status.getSpeed());
        };
        Game.prototype.endGame = function () {
            clearInterval(this.run);
            this.modal.showModal();
            this.status.reset();
        };
        Game.prototype.pauseGame = function () {
            this.pause = !this.pause;
            this.pause ? clearInterval(this.run) : this.playing();
        };
        Game.prototype.turn = function (key) {
            this.snake.turn(key);
        };
        Game.prototype.eat = function () {
            this.snake.eat();
            this.egg.eat();
            this.status.eat(this.snake.ate);
            this.updateSpeed();
        };
        return Game;
    }());

    var lever = document.getElementById('lever');
    var base = document.getElementById('base');
    var snakeKeys = Object
        .keys(actionTypes)
        .map(function (key) { return actionTypes[key]; });
    var scale = 20;
    var game = new Game(scale);
    window.addEventListener("keydown", function (_a) {
        var key = _a.key;
        key === 'p' && game.pauseGame();
        snakeKeys.some(function (move) { return move === key; }) && game.turn(key);
        switch (key) {
            case 'ArrowRight':
                lever.style.transform = "rotate(45deg) translateX(10px)";
                base.style.transform = "rotate(315deg) translateX(-13px) translateY(-10px)";
                break;
            case 'ArrowLeft':
                lever.style.transform = "rotate(-45deg) translateX(-10px)";
                base.style.transform = "rotate(45deg) translateX(-16px) translateY(16px)";
                break;
            case 'ArrowDown':
            case 'ArrowUp':
                lever.style.setProperty('--ball-down', '-18px');
                break;
        }
        setTimeout(function () {
            lever.style.transform = "";
            base.style.transform = "";
            lever.style.setProperty('--ball-down', '-31px');
        }, 200);
    });

})();
