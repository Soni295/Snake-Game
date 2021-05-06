class CtrlElement {
  constructor(element){
    this.element = document.getElementById(element)
    this.data = 0
    this.type =  element + `: `
    this.updateInfo()
  }
  handleData(value, set = false) {
    console.log('set',  set, 'value', value)
    this.data = set ? value : this.data + value
    this.updateInfo()
  }
  updateInfo(){
    this.element.innerHTML = this.type + this.data
  }
  reset(){
    this.data = 0
    this.updateInfo()
  }
}

class SelectSpeed {
  constructor(){
    this.element = document.getElementById('speedSelector')
  }
  getValue(){
    return Number(this.element.value)
  }
}

class Status {
  constructor(){
    this.score = new CtrlElement('score')
    this.difficulty = new CtrlElement('speed')
    this.difficulty.handleData(1)
    this.speedSelector = new SelectSpeed()
    this.speed = 250
    this.eats = 0
  }
  changeSpeed(){
    const speed = this.speedSelector.getValue()
    this.difficulty.handleData(speed, true)
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
    this.eats = 0
    this.speed = 250
  }
}
