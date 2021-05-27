import { character } from './Snake.js'

type iActionTypes = {
  ARROWUP: string
  ARROWDOWN: string
  ARROWLEFT: string
  ARROWRIGHT: string
}
export const actionTypes : iActionTypes= {
  ARROWUP: 'ArrowUP',
  ARROWDOWN: 'ArrowDown',
  ARROWLEFT: 'ArrowLeft',
  ARROWRIGHT: 'ArrowRight'
}
type iReducer = (state: character, scale: number) => character

export const reducer: iReducer = (state, scale) => {
  const head = {...state.body[0]}

  switch(state.direction){
    case actionTypes.ARROWUP:
      return {...state}
    case actionTypes.ARROWDOWN:
      return {...state}
    case actionTypes.ARROWLEFT:
      return {...state}
    case actionTypes.ARROWRIGHT:
      head.x += scale
      return {...state, body:[head]}
    default:
      return {...state}
  }
}
