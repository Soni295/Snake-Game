import { Counter, iCounter } from './Counter.js'
import { ID } from './id.js'

export interface iStatus {
  score: iCounter
  speed: iCounter
}

export class Status implements iStatus {

  score: iCounter
  speed: iCounter

  constructor() {
    this.score = new Counter(ID.SCORE)
    this.speed = new Counter(ID.SPEED)
  }
}
