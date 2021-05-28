import { position } from './Canvas.js'

type iActionTypes = {
  [x: string]: string
}

export const actionTypes : iActionTypes= {
  ARROWUP: 'ArrowUp',
  ARROWDOWN: 'ArrowDown',
  ARROWLEFT: 'ArrowLeft',
  ARROWRIGHT: 'ArrowRight'
}

type iReducer = (state: position, action: {scale: number, type: string}) => position

export const reducer: iReducer = (state, action) => {

  interface iCases { [x: string]: () => position }

  const cases: iCases = {
    [actionTypes.ARROWUP]: () => ({...state, y: state.y - action.scale}),
    [actionTypes.ARROWDOWN]: () => ({...state, y: state.y + action.scale}),
    [actionTypes.ARROWLEFT]: () => ({...state, x: state.x - action.scale}),
    [actionTypes.ARROWRIGHT]: () => ({...state, x: state.x + action.scale})
  }
  return cases[action.type]() || {...state}
}
