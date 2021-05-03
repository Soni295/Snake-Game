const newPosition = (size, {height, width}) => ({
  x: size * (Math.floor((Math.random() * height)/ size -1) +1),
  y: size * (Math.floor((Math.random() * width)/ size -1) +1)
})

class Egg {
  spawn() {
    this.position = newPosition(scale, screen)
    this.draw()
  }
  draw(color = "#00ff14") {
    context.fillStyle = color
    context.fillRect(this.position.x, this.position.y, scale, scale)
  }
}

let egg = new Egg()
