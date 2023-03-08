import { position } from './Canvas.js';
import { character } from './Snake.js';

type iActionTypes = {
  [x: string]: string;
};

export const actionTypes: iActionTypes = {
  ARROWUP: 'ArrowUp',
  ARROWDOWN: 'ArrowDown',
  ARROWLEFT: 'ArrowLeft',
  ARROWRIGHT: 'ArrowRight',
};

type iReducer = (
  snake: character,
  action: { scale: number; type: string }
) => character;

export const reducer: iReducer = (snake, action) => {
  const [head, _, neck] = snake.body;

  interface iCases {
    [x: string]: (direction: string) => character;
  }
  const cases: iCases = {
    [actionTypes.ARROWUP]: (direction) => ({
      body: [{ x: head.x, y: head.y - action.scale }, ...snake.body.slice(1)],
      direction,
    }),
    [actionTypes.ARROWDOWN]: (direction) => ({
      body: [{ x: head.x, y: head.y + action.scale }, ...snake.body.slice(1)],
      direction,
    }),
    [actionTypes.ARROWLEFT]: (direction) => ({
      body: [{ x: head.x - action.scale, y: head.y }, ...snake.body.slice(1)],
      direction,
    }),
    [actionTypes.ARROWRIGHT]: (direction) => ({
      body: [{ x: head.x + action.scale, y: head.y }, ...snake.body.slice(1)],
      direction,
    }),
  };

  const setMove = {
    [actionTypes.ARROWLEFT]: () =>
      head.x === neck.x + action.scale
        ? snake.direction
        : actionTypes.ARROWLEFT,
    [actionTypes.ARROWRIGHT]: () =>
      head.x === neck.x - action.scale
        ? snake.direction
        : actionTypes.ARROWRIGHT,
    [actionTypes.ARROWDOWN]: () =>
      head.y === neck.y - action.scale
        ? snake.direction
        : actionTypes.ARROWDOWN,
    [actionTypes.ARROWUP]: () =>
      head.y === neck.y + action.scale ? snake.direction : actionTypes.ARROWUP,
  };

  const newDirection = setMove[action.type]();
  return cases[newDirection](newDirection);
};
