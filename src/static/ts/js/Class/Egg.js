const newPosition = (size, {height, width}) => ({
  x: size * (Math.floor((Math.random() * height)/ size -1) +1),
  y: size * (Math.floor((Math.random() * width)/ size -1) +1)
})

class Egg {
  constructor(scale, screen){
    this.scale = scale
    this.screen = screen
  }
  spawn() {
    this.position = newPosition(this.scale, this.screen)
    this.draw()
  }
  draw(color = "#00ff14") {
    paintCanvas(this.position, color)
  }
}
