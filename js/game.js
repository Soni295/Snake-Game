function game() {
  limited.endGame = false;

  let run = setInterval(() => {
    if (!snake.pause) {
      context.clearRect(0, 0, screen.width, screen.height);
      egg.draw();
      snake.update();
      limited.iAmAlive(snake);

      if (snake.eat(egg)) {
        egg.spawn();
        punctuation();
        nextLevel(run, snake);
      }

      console.log(fpmls);
      if (limited.endGame) {
        document.getElementById("speed").value = 1; //temporalmente

        clearInterval(run);
      }
    }
  }, fpmls);
}

let newGame = () => {
  firstSet();
  limited.start(snake, egg);
};

const btnTryAgain = document.getElementById("btn");
const btnStart = document.getElementById("btn-start");

btnStart.onclick = () => {
  newGame();
};

btnTryAgain.onclick = () => {
  newGame();
  clearInterval(game);
  resetPunctuation();
};

window.addEventListener("keydown", (e) => {
  snake.turn(e.key);
});

function nextLevel(run, snake) {
  clearInterval(run);
  upgradeSpeed();
  setTimeout(() => {
    game();
  }, 10);
}
