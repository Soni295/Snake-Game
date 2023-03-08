import { position, iCanvas } from './Canvas.js';
import { reducer } from './reducerSnake.js';

export type character = {
  body: Array<position>;
  direction: string;
};

export interface iSnake {
  snake: character;
  screen: iCanvas;
  pause: boolean;
  scale: number;
  ate: number;
  arrow: string;
  start(): void;
  draw(color: string): void;
  update(): void;
  move(): void;
  turn(key: string): void;
  eat(): void;
}

export class Snake implements iSnake {
  ate: number;
  snake: character;
  pause: boolean;
  scale: number;
  screen: iCanvas;
  direction: any;
  arrow: string;

  constructor(screen: iCanvas, scale: number) {
    this.screen = screen;
    this.scale = scale;
  }

  start(): void {
    this.snake = {
      body: [
        { x: this.scale * 2, y: 0 },
        { x: this.scale, y: 0 },
        { x: 0, y: 0 },
      ],
      direction: 'ArrowRight',
    };
    this.ate = 0;
    this.arrow = 'ArrowRight';
    this.direction = '';
    this.pause = false;
    this.draw();
  }

  draw(color: string = '#FFFFFF'): void {
    for (const snake of this.snake.body) {
      this.screen.paintCanvas(snake, color);
    }
  }
  generate(): void {
    const tail: number = this.snake.body.length - 1;
    const temp: any = this.snake.body.slice(0, tail);
    this.snake.body = [this.snake.body[0]].concat(temp);
  }

  update(): void {
    this.generate();
    this.move();
    this.draw();
  }

  move(): void {
    const action: { scale: number; type: string } = {
      scale: this.scale,
      type: this.arrow,
    };
    //this.snake.body[0] = reducer(head, neck, action)
    this.snake = reducer(this.snake, action);
  }
  turn(key: string) {
    this.arrow = key;
  }
  eat(): void {
    this.ate++;
    this.snake.body[this.snake.body.length] =
      this.snake.body[this.snake.body.length - 1];
  }
}
