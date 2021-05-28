import { iSnake } from './Snake'
import { iEgg } from './Egg'
import { iGame } from './Game'

export interface iRules {
  snake: iSnake
  egg: iEgg
  game: iGame
  check(): void
  eatEgg(): boolean
}

export class Rules implements iRules {
  snake: iSnake
  egg: iEgg
  game: iGame

  constructor(snake: iSnake, egg: iEgg, game: iGame){
    this.snake = snake
    this.egg = egg
    this.game = game
  }
  check(): void{
    if(this.eatEgg()){
      this.game.eat()
    }
  }
  eatEgg(): boolean {
    const snake = JSON.stringify(this.snake.snake.body[0])
    const egg = JSON.stringify(this.egg.position)
    return snake === egg
  }
}
