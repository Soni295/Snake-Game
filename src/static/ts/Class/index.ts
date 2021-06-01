
interface iHandleElement {
  element: HTMLInputElement
  getElement(): string
  setValueElement(value: string): void
  getValue(): string
}
class HandleElement implements iHandleElement{
  element: HTMLInputElement

  constructor(id: string) {
    this.element = (<HTMLInputElement>document.getElementById(id))
  }
  getElement(): string {
    return this.element.innerHTML
  }
  getValue(): any{
    return this.element.value
  }
  setValueElement(value: string): void {
    this.element.innerHTML = value
  }
}





interface iRules {
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

class Rules implements iRules {
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







interface iModal extends iHandleElement {
  hideElement(): void
  showElement(): void
}
class Modal extends HandleElement implements iModal {

  constructor(id: string) {
    super(id)
  }

  hideElement(): void {
    this.element.classList.add('fade-out')
  }

  showElement(): void {
    this.element.classList.remove('fade-out')
    this.element.classList.add('fade-in')
  }
}







interface iclassName {
  SHOW: string
  HIDE: string
}

const className: iclassName = {
  SHOW: 'fade-in',
  HIDE: 'fade-out',
}

interface iID {
  [x: string]: string
}
const ID: iID = {
  SCORE: 'score',
  SPEED: 'speed',
  SCREEN: 'screen',
  MODAL: 'modal',
  BTN_MODAL: 'btn-modal',
  SPEED_SELECTOR: 'speed-selector'
}
interface position {
  x: number
  y: number
}
interface iCanvas {
  canvas: HTMLCanvasElement
  context: CanvasRenderingContext2D
  scale: number
  clearCanvas(): void
  paintCanvas(position: position, color: string): void
}

class Canvas implements iCanvas {
  canvas: HTMLCanvasElement
  context: CanvasRenderingContext2D
  scale: number

  constructor(scale: number) {
    this.canvas = <HTMLCanvasElement>document.getElementById(ID.SCREEN)
    this.context = this.canvas.getContext('2d')
    this.scale = scale
  }

  clearCanvas(): void {
    const {width, height} = this.canvas
    this.context.clearRect(0, 0, width, height)
  }
  paintCanvas(position: position, color: string){
    this.context.fillStyle = color;
    this.context.fillRect(position.x, position.y, this.scale, this.scale);
  }
}



type iActionTypes = {
  [x: string]: string
}

const actionTypes : iActionTypes= {
  ARROWUP: 'ArrowUp',
  ARROWDOWN: 'ArrowDown',
  ARROWLEFT: 'ArrowLeft',
  ARROWRIGHT: 'ArrowRight'
}

type iReducer = (state: position, action: {scale: number, type: string}) => position

const reducer: iReducer = (state, action) => {

  interface iCases { [x: string]: () => position }

  const cases: iCases = {
    [actionTypes.ARROWUP]: () => ({...state, y: state.y - action.scale}),
    [actionTypes.ARROWDOWN]: () => ({...state, y: state.y + action.scale}),
    [actionTypes.ARROWLEFT]: () => ({...state, x: state.x - action.scale}),
    [actionTypes.ARROWRIGHT]: () => ({...state, x: state.x + action.scale})
  }
  return cases[action.type]() || {...state}
}






type character = {
  body: Array<position>
  direction: string
}

interface iSnake {
  snake: character
  screen: iCanvas
  pause: boolean
  scale: number
  ate: number
  start(): void
  draw(color: string): void
  update(): void
  move(): void
  turn(key: string): void
  eat(): void
}

class Snake implements iSnake {
  ate: number
  snake: character
  pause: boolean
  scale: number
  screen: iCanvas
  direction: any

  constructor(screen: iCanvas, scale: number){
    this.screen = screen
    this.scale = scale
  }

  start(): void {
    this.snake = {
      body: [
        {x: this.scale * 2, y: 0},
        {x: this.scale , y: 0},
        {x: 0, y: 0}
      ],
      direction: 'ArrowRight'
    }
    this.ate = 0
    this.direction = ''
    this.pause = false
    this.draw()
  }

  draw(color: string='#FFFFFF'): void {
    for(const snake of this.snake.body){
      this.screen.paintCanvas(snake, color)
    }
  }
  generate(): void {
    const tail: number = this.snake.body.length -1
    const temp: any = this.snake.body.slice(0, tail)
    this.snake.body = [this.snake.body[0]].concat(temp)
  }

  update(): void {
    this.generate()
    this.move()
    this.draw()
  }

  move(): void {
    const action: {scale: number, type: string} = {
      scale: this.scale,
      type: this.snake.direction
    }
    this.snake.body[0] = reducer(this.snake.body[0],action)
  }
  turn(key: string) {
    this.snake.direction = key
  }
  eat(): void {
    this.ate++
    this.snake.body[this.snake.body.length] = this.snake.body[this.snake.body.length - 1 ]
  }
}




interface iEgg {
  scale: number
  screen: iCanvas
  position?: position
  spawn(): void
  draw(color? : string): void
  eat(): void
}

const newPosition = (size: number, {height, width}: HTMLCanvasElement) => ({
  x: size * (Math.floor((Math.random() * height)/ size -1) +1),
  y: size * (Math.floor((Math.random() * width)/ size -1) +1)
})

class Egg implements iEgg {
  scale: number
  screen: iCanvas
  position?: position

  constructor(screen: iCanvas){
    this.scale = screen.scale
    this.screen = screen
  }

  spawn(): void {
    this.position = newPosition(this.scale, this.screen.canvas)
    this.draw()
  }

  draw(color: string = "#00ff14") {
    this.screen.paintCanvas(this.position, color)
  }

  eat(): void {
    this.spawn()
  }
}








interface iCounter extends iHandleElement {
  data: number
  type: string
  handleData(value: number, set?: boolean): void
  updateInfo(): void
  reset(): void
  getData(): number
}
class Counter extends HandleElement implements iCounter{
  data: number
  type: string

  constructor(id: string){
    super(id)
    this.data = 0
    this.type = `${id}: `
    this.updateInfo()
  }

  handleData(value: number, set: boolean=false): void {
    this.data = set ? value : this.data + value
    this.updateInfo()
  }
  getData(): number{
    return this.data
  }

  updateInfo(): void {
    const newState: string = this.type + this.data.toString()
    this.setValueElement(newState)
  }

  reset(): void {
    this.data = 0
    this.updateInfo()
  }
}


interface iStatus {
  score: iCounter
  speed: iCounter
  eat(eggs: number) : void
  setSpeed(num: number): void
  getSpeed(): number
  reset(): void
}

class Status implements iStatus {

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

interface iHandleModal {
  btn: iHandleElement
  speedSelector: iHandleElement
  modal: iModal
  game: iGame
  start(): void
  selectSpeed(): number
  showModal(): void
}

class HandleModal implements iHandleModal {
  btn: iHandleElement
  speedSelector: iHandleElement
  modal: iModal
  game: iGame

  constructor(game: iGame){
    this.btn = new HandleElement(ID.BTN_MODAL)
    this.modal = new Modal(ID.MODAL)
    this.speedSelector = new HandleElement(ID.SPEED_SELECTOR)
    this.game = game
    this.btn.element.onclick = () => this.start()
  }

  start(): void{
    this.modal.hideElement()
    this.game.start()
  }

  selectSpeed(): number {
    return Number(this.speedSelector.getValue())
  }
  showModal(): void{
    this.modal.showElement()
  }
}























interface iGame {
  status: iStatus
  canvas: iCanvas
  egg: iEgg
  snake: iSnake
  rules: iRules
  modal: iHandleModal
  run: ReturnType<typeof setInterval> | null
  pause: boolean
  start(): void
  playing(): void
  pauseGame(): void
  turn(key: string): void
  eat(): void
  endGame(): void
  updateSpeed(): void
}

class Game implements iGame {
  status: iStatus
  canvas: iCanvas
  egg: iEgg
  snake: iSnake
  rules: iRules
  modal: iHandleModal
  run: ReturnType<typeof setInterval> | null
  pause: boolean

  constructor(scale: number){
    this.status = new Status()
    this.canvas = new Canvas(scale)
    this.egg = new Egg(this.canvas)
    this.snake = new Snake(this.canvas, scale)
    this.rules = new Rules(this.snake, this.egg, this)
    this.modal = new HandleModal(this)
    this.pause = false
    this.run = null
  }

  start(): void {
    this.egg.spawn()
    this.snake.start()
    this.status.setSpeed(this.modal.selectSpeed())
    this.playing()
  }

  updateSpeed(): void {
    clearInterval(this.run)
    this.playing()
  }

  playing(): void {
    this.run = setInterval(()=> {
      this.rules.check()
      this.canvas.clearCanvas()
      this.egg.draw()
      this.snake.update()
    }, 1000 / this.status.getSpeed())// modificar
  }

  endGame(): void {
    clearInterval(this.run)
    this.modal.showModal()
    this.canvas.clearCanvas()
    this.status.reset()
  }

  pauseGame(): void {
    this.pause = !this.pause
    this.pause ? clearInterval(this.run) : this.playing()
  }

  turn(key: string): void{
    this.snake.turn(key)
  }

  eat(): void {
    this.snake.eat()
    this.egg.eat()
    this.status.eat(this.snake.ate)
    this.updateSpeed()
  }
}











const lever: HTMLElement = document.getElementById('lever')
const base: HTMLElement = document.getElementById('base')

const snakeKeys: Array<string> = Object
  .keys(actionTypes)
  .map(key => actionTypes[key])

const scale: number = 20

const game: iGame = new Game(scale)

window.addEventListener("keydown", ({key}) => {
  key === 'p' && game.pauseGame()

  snakeKeys.some(move => move === key) && game.turn(key)

  switch(key){
    case 'ArrowRight':
      lever.style.transform = "rotate(45deg) translateX(10px)"
      base.style.transform = "rotate(315deg) translateX(-13px) translateY(-10px)"
      break
    case 'ArrowLeft':
      lever.style.transform = "rotate(-45deg) translateX(-10px)"
      base.style.transform = "rotate(45deg) translateX(-16px) translateY(16px)"
      break
    case 'ArrowDown':
    case 'ArrowUp':
      lever.style.setProperty('--ball-down', '-18px')
      break
    default:
  }
  setTimeout(()=> {
    lever.style.transform = ""
    base.style.transform = ""
    lever.style.setProperty('--ball-down', '-31px')
  }, 200)
})
