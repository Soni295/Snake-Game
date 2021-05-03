function Snake() {
  this.start = () => {
    this.position = { x: 0, y: 0 };
    this.direction = { x: scale, y: 0 };
    this.ate = 4;
    this.tail = [];
    this.pause = false;
    this.draw();
  };

  this.draw = () => {
    context.fillStyle = "#FFFFFF";
    context.fillRect(this.position.x, this.position.y, scale, scale);

    for (let i = 0; i < this.tail.length; i++) {
      try {
        context.fillRect(this.tail[i]["x"], this.tail[i]["y"], scale, scale);
      } catch {}
    }
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

  this.eat = food => {
    if (this.position.x === food.position.x && this.position.y ===
      food.position.y) {
      this.ate++;
      return true;
    }
    return false;
  };

  this.turn = (arrow) => {
    this.neck = snake.tail[snake.tail.length - 1];
    if (arrow === "ArrowUp" && this.position.y !== this.neck.y + scale) {
      this.direction.x = 0;
      this.direction.y = -scale * 1;
    }
    if (arrow === "ArrowDown" && this.position.y !== this.neck.y - scale) {
      this.direction.x = 0;
      this.direction.y = scale * 1;
    }
    if (arrow === "ArrowRight" && this.position.x !== this.neck.x - scale) {
      this.direction.x = scale * 1;
      this.direction.y = 0;
    }
    if (arrow === "ArrowLeft" && this.position.x !== this.neck.x + scale) {
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
    launch.style.display = "none";
    tryAgain.style.display = "none";
    context.clearRect(0, 0, screen.width, screen.height);
    python.start();
    food.spawn();
    this.endGame = false;
    game();
  };

  this.lose = (python) => {
    tryAgain.style.display = "block";
    python.direction.x = 0;
    python.direction.y = 0;
    this.endGame = true;
  };

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
    if (python.tail[0]) {
      for (let i = 0; i < python.tail.length; i++) {
        python.tail[i];
        if (
          python.tail[i].x === python.position.x &&
          python.tail[i].y === python.position.y
        ) {
          this.lose(python);
        }
      }
    }
  };
}
let snake = new Snake();
let limited = new Limited();
