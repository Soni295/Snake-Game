function Snake() {
  this.start = () => {
    this.position = { x: 0, y: 0 };
    this.direction = { x: scale, y: 0 };
    this.ate = 0;
    this.tail = [];
    this.pause = false;
  };

  this.draw = (color = "#FFFFFF") => {
    context.fillStyle = color;

    context.fillRect(this.position.x, this.position.y, scale, scale);
    try {
      for (let i = 0; i < this.tail.length; i++) {
        context.fillRect(this.tail[i]["x"], this.tail[i]["y"], scale, scale);
      }
    } catch {}
  };

  this.update = () => {
    for (let i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    }
    this.tail[this.ate - 1] = {
      x: this.position.x,
      y: this.position.y,
    };
    this.position.x += this.direction.x;
    this.position.y += this.direction.y;

    this.draw();
  };

  this.stop = () => {
    this.pause = !this.pause;
    if (this.pause) {
      this.save = {
        x: this.direction.x,
        y: this.direction.y,
      };
      this.direction.x = 0;
      this.direction.y = 0;
    } else {
      this.direction = {
        x: this.save.x,
        y: this.save.y,
      };
    }
  };

  this.eat = (food) => {
    if (this.position.x === food.x && this.position.y === food.y) {
      this.ate++;
      return true;
    }
    return false;
  };

  this.turn = (arrow) => {
    if (arrow === "ArrowUp" && this.direction.y !== scale) {
      this.direction.x = 0;
      this.direction.y = -scale * 1;
    } else if (arrow === "ArrowDown" && this.direction.y !== -scale) {
      this.direction.x = 0;
      this.direction.y = scale * 1;
    } else if (arrow === "ArrowRight" && this.direction.x !== -scale) {
      this.direction.x = scale * 1;
      this.direction.y = 0;
    } else if (arrow === "ArrowLeft" && this.direction.x !== scale) {
      this.direction.x = -scale * 1;
      this.direction.y = 0;
    } else if (arrow === "p") this.stop();
  };
}
function Limited() {
  this.iAmAlive = (python) => {
    this.finite(python);
    this.iAmNotFood(python);
  };

  this.start = (python, food) => {
    python.start();
    this.gameOver();
    food.spawn();
  };

  this.gameOver = () => {
    this.freezed = !this.freezed;
  };

  this.lose = (python) => {
    modal.style.display = "block";
    python.direction.x = 0;
    python.direction.y = 0;
    this.gameOver();
  };
  this.stopGame = () => {};

  this.infinite = (python) => {
    if (python.position.x > screen.width - scale) {
      python.position.x = 0;
    }
    if (python.position.x < 0) {
      python.position.x = screen.width - scale;
    }
    if (python.position.y > screen.height - scale) {
      python.position.y = 0;
    }
    if (python.position.y < 0) {
      python.position.y = screen.height - scale;
    }
  };

  this.finite = (python) => {
    if (
      python.position.x > screen.width - scale ||
      python.position.x < 0 ||
      python.position.y > screen.height - scale ||
      python.position.y < 0
    ) {
      this.lose(python);
    }
  };

  this.iAmNotFood = (python) => {
    for (let i = 0; i < python.tail.length; i++) {
      python.tail[i];
      if (
        python.tail[i].x === python.position.x &&
        python.tail[i].y === python.position.y
      ) {
        this.lose(python);
      }
    }
  };
}

function Egg() {
  this.spawn = () => {
    this.x =
      scale * (Math.floor((Math.random() * screen.height) / scale - 1) + 1);
    this.y =
      scale * (Math.floor((Math.random() * screen.width) / scale - 1) + 1);
  };

  this.draw = () => {
    context.fillStyle = "#00ff14";
    context.fillRect(this.x, this.y, scale, scale);
  };

  this.eat = (food) => {
    if (this.x === food.x && this.y === food.y) return true;
    return false;
  };
}
