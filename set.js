let score = document.getElementById("score");
let info = document.getElementById("title");
let data = { score: 0, speed: 0 };

function firstSet() {
  data.speed = document.getElementById("speed").value;
  data.speed = Number(data.speed);
  infoSet();
}

function infoSet() {
  updateInfo();
  setSpeed();
}

function updateInfo() {
  info.innerHTML = `
    <p class="desc">Score: ${data.score}</p>
    <h1>The Snake Game</h1>
    <p class="desc">Speed: ${data.speed}</p>`;
}

function punctuation() {
  data.score += data.speed * 5;
  infoSet();
}
function resetPunctuation() {
  data.score = 0;
  updateInfo();
}

function upgradeSpeed() {
  switch (snake.ate - 3) {
    case 5:
      if (data.speed < 2) data.speed++;
      break;
    case 10:
      if (data.speed < 3) data.speed++;
      //data.speed = 3;
      break;
    case 15:
      if (data.speed < 4) data.speed++;
      //data.speed = 4;
      break;
    case 20:
      if (data.speed < 5) data.speed++;
      data.speed = 5;
      break;
  }
}

function setSpeed() {
  switch (data.speed) {
    case 1:
      fpmls = 250;
      break;
    case 2:
      fpmls = 125;
      break;
    case 3:
      fpmls = 75;
      break;
    case 4:
      fpmls = 60;
      break;
    case 5:
      fpmls = 30;
      break;
  }
}
