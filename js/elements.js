// status
const score = document.getElementById('score')
const speed = document.getElementById('speed')
const speedSelector = document.getElementById('speedSelector')

// game
const btnTryAgain = document.getElementById("btn")
const btnStart = document.getElementById("btn-start")
const launch = document.getElementById("modal2")
const tryAgain = document.getElementById("modal1")

// screen
const screen = document.getElementById("screen");
const context = screen.getContext("2d");

// paint egg and snake
const paintCanvas = ({x, y}, color) => {
  context.fillStyle = color
  context.fillRect(x, y, scale, scale)
}
// start and restar game
const clearCanvas = () =>
  context.clearRect(0, 0, screen.width, screen.height)

// proporcion de la serpiente
const scale = 20;

// Escala del juego
const column = screen.width / scale;
const rows = screen.height / scale;

// hired modal
const hireModal = () => {
  launch.style.display = "none"
  tryAgain.style.display = "none"
}
