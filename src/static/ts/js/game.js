class Modal {
  constructor(game){
    this.btn = document.getElementById('btn-modal')
    this.modal = document.getElementById('modal')
    this.game = game
    this.set()
  }
  set(){
    this.btn.onclick = () => this.hire()
  }
  hire() {
    this.modal.classList.add('fade-out')
    this.btn.disabled = true
    setTimeout(()=> this.game.start(), 1200)

    setTimeout(()=> this.btn.disabled = false, 1400)
  }
  show() {
    modal.classList.remove('fade-out')
    modal.classList.add('fade-in')
  }
}

class Game {
  constructor() {
    this.status = new Status()
    this.egg = new Egg(scale, screen)
    this.snake = new Snake()
    this.limited = new Limited(this.egg, this.snake)
    this.modal = new Modal(this)
  }

  start() {
    this.status.changeSpeed()
    this.snake.start()
    this.egg.spawn()
  }


}
const game = new Game()



/*

function ngame() {
  const run = setInterval(() => {
    clearCanvas()
    egg.draw()
    if (!snake.pause) {
      egg.draw();
      snake.update();
      limited.iAmAlive(snake);

      if (snake.eat(egg)) {
        egg.spawn();
        punctuation();
        nextLevel(run, snake);
      }

      if (limited.endGame) {
        document.getElementById("speed").value = 1; //temporalmente
        clearInterval(run);
      }
    }
  }, status.speed);
}
function nextLevel(run) {
  clearInterval(run)
  upgradeSpeed()
  setTimeout(() => game(), 10)
}

*/
