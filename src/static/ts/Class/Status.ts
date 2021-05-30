import { Counter, iCounter } from './Counter.js'
import { ID } from './id.js'

export interface iStatus {
  score: iCounter
  speed: iCounter
  eat(eggs: number) : void
  setSpeed(num: number): void
  getSpeed(): number
  reset(): void
}

export class Status implements iStatus {

  score: iCounter
  speed: iCounter

  constructor() {
    this.score = new Counter(ID.SCORE)
    this.speed = new Counter(ID.SPEED)
  }

  eat(eggs: number){
    if(eggs % 5 === 0) this.speed.handleData(1)
    this.score.handleData(this.speed.data * 5)
  }

  setSpeed(num: number): void {
    this.speed.handleData(num, true)
  }
  getSpeed(): number{
    return this.speed.getData()
  }
  reset(): void {
    this.score.reset()
  }
}
