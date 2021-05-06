class Snake {
  start() {
    this.body = [{ x: 0, y: 0 }]
    this.move = { x: scale, y: 0 , direction: 'right'}
    this.ate = 3
    this.tail = []
    this.pause = false
    this.draw()
  }
  draw(color = "#FFFFFF") {
    for(const snake of this.body) paintCanvas(snake, color)
  }

  update(){
    console.log(this.body)
    /*
    for(let i = 1; i < this.body.length; i++) {
      this.body[i] = this.body[i-1]
    }
    this.tail[this.ate - 1] = {
      x: this.body[0]["x"],
      y: this.body[0]["y"],
    }
    this.body.unshift(this.move)

    this.body[0]["x"] += this.move.x
    this.body[0]["y"] += this.move.y
  */

    this.body[0]["x"] += this.move.x
    this.body[0]["y"] += this.move.y
    this.draw()
  }

  stop (){
    this.pause = !this.pause
    if (this.pause) {
      this.save = {
        x: this.move.x,
        y: this.move.y,
      }
      this.move.x = 0
      this.move.y = 0
    } else {
      this.move = {
        x: this.save.x,
        y: this.save.y,
      }
    }
  }

  eat({position}) {
    if (this.body[0]['x'] == position.x && this.body[0]['y'] == position.y) {
      this.ate++
      return true
    }
    return false
  }

  turn(arrow) {
    let direction = this.move.direction
    if (arrow === "ArrowUp" && direction !== 'down')
      this.move = { direction: 'up', x: 0, y: -scale }

    else if (arrow === "ArrowDown" && direction !== 'up')
      this.move = { direction: 'down', x: 0, y: scale }

    else if (arrow === "ArrowRight" && direction !== 'left')
      this.move = { direction: 'right', x: scale, y: 0 }

    else if (arrow === "ArrowLeft" && direction !== 'right')
      this.move = { direction: 'left', x: -scale, y: 0 }

    else if (arrow === "p") this.stop()
  }
}

const allowKeys = [
  'ArrowUp',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'p'
]
window.addEventListener("keydown", ({key}) => allowKeys.includes(key) && snake.turn(key))
