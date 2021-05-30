import { iSnake, character } from './Snake'
import { position } from './Canvas.js'
import { iEgg } from './Egg'
import { iGame } from './Game'

const obToS = (obj: position) => JSON.stringify(obj)


export interface iRules {
  snake: iSnake
  egg: iEgg
  game: iGame
  width: number
  height: number
  check(): void
  eatEgg(head: string): void
  eatItSelf(head: string, body: Array<string>): void
  limit(head: string): void
}

export class Rules implements iRules {
  snake: iSnake
  egg: iEgg
  game: iGame
  width: number
  height: number

  constructor(snake: iSnake, egg: iEgg, game: iGame){
    this.snake = snake
    this.egg = egg
    this.game = game
    this.width = this.game.canvas.canvas.width
    this.height = this.game.canvas.canvas.height
  }

  check(): void{
    const [head, ...body] = this.snake.snake.body
      .map(part => JSON.stringify(part))
    this.eatEgg(head)
    this.eatItSelf(head, body)
    this.limit(head)
  }

  eatItSelf(head: string, body: Array<string>): void{
    body.some(part => part == head) && this.game.endGame()
  }

  eatEgg(head: string): void{
    const egg: string = JSON.stringify(this.egg.position)
    head === egg  && this.game.eat()
  }

  limit(head: string): void {
    const headSnake: position = JSON.parse(head)
    switch(true){
      case headSnake.x >= this.width:
      case headSnake.x < 0:
      case headSnake.y >= this.height:
      case headSnake.y < 0:
        this.game.endGame()
        break
      default:
    }
  }
}
