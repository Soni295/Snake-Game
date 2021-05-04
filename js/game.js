const snake = { start: () => console.log('hola')}

const status = new Status()
const egg = new Egg(scale, screen)
const limited = new Limited(snake, egg)


const newGame = () => {
  hireModal()
  status.selectSpeed()
  clearCanvas()
  limited.start()
  game()
}

btnStart.onclick = () => newGame()

function game() {
  const run = setInterval(() => {
    clearCanvas()
    egg.draw()
/*
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
*/
  }, status.speed);
}

/*
let newGame = () => {
  firstSet();
  limited.start(snake, egg);
};



btnTryAgain.onclick = () => {
  newGame();
  clearInterval(game);
  resetPunctuation();
};

function nextLevel(run) {
  clearInterval(run)
  upgradeSpeed()
  setTimeout(() => game(), 10)
}

*/
