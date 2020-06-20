const screen = document.getElementById("screen");
const launch = document.getElementById("modal2");
const btn = document.getElementById("my-btn");
let modal = document.getElementById("modal1");
const context = screen.getContext("2d");
const scale = 10;
let fpmls = 150;
const btnStart = document.getElementById("my-btn-start");

btnStart.onclick = () => {
  launch.style.display = "none";
  start();
};

//(() => (modal.style.display = "block"))();

btn.onclick = () => {
  modal.style.display = "none";
  limited.start(snake, egg);
};

const rows = screen.height / scale;
const column = screen.width / scale;

window.addEventListener("keydown", (e) => {
  snake.turn(e.key);
});

function start() {
  set();
  limited.start(snake, egg);
}

let snake = new Snake();
let egg = new Egg();
let limited = new Limited();

function set() {
  window.setInterval(() => {
    if (snake.pause === false && limited.freezed) {
      context.clearRect(0, 0, screen.width, screen.height);
      egg.draw();
      snake.update();
      limited.iAmAlive(snake);

      if (snake.eat(egg)) {
        egg.spawn();
      }
    }
  }, fpmls);
}
