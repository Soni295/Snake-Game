import { HandleModal, iHandleModal } from './HandleModal.js'
import { Status, iStatus } from './Status.js'
import { Egg, iEgg } from './Egg.js'
import { Canvas, iCanvas } from './Canvas.js'
import { Snake, iSnake } from './Snake.js'

const scale: number = 20

export interface iGame {
  status: iStatus
  canvas: iCanvas
  egg: iEgg
  modal: iHandleModal
}

class Game implements iGame {
  status: iStatus
  canvas: iCanvas
  egg: iEgg
  modal: iHandleModal

  constructor(scale: number){
    this.status = new Status()
    this.canvas = new Canvas(scale)
    this.egg = new Egg(this.canvas)
    this.modal = new HandleModal(this)
  }
}

const game: iGame = new Game(scale)
