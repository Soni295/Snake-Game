class Limited {
  constructor(python, egg) {
    this.python = python
    this.egg = egg
    this.endGame = false;
  }
  start(){
    this.python.start();
    this.egg.spawn()
  }

}


  /*
  this.iAmAlive = (python) => {
    this.finite(python);
    this.iAmNotFood(python);
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

  this.iAmNotFood = python => {

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
  */
