class Status {
  constructor(){
    this.score = score
    this.difficulty = speed
    this.speed = 250
    this.data = { score: 0, speed: 0 }
    this.eats = 0
  }
  updateInfo() {
    this.difficulty.innerHTML = `Speed: ${this.data.speed}`
    this.score.innerHTML = `Score: ${this.data.score}`
  }
  selectSpeed(){
    this.data.speed = Number(speedSelector.value)
    this.updateInfo()
  }
  upgradeScore() {
    this.data.score += this.data.speed * 5
    this.eats++
    if(this.eats % 5 === 0) upgradeSpeed()
    this.updateInfo()
  }
  upgradeSpeed() {
    this.data.speed++
    this.speed /= 2
  }
  reset(){
    this.data = { score: 0, speed: 0 }
    this.eats = 0
    this.updateInfo()
    this.speed = 250
  }
}
