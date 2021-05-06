class Element {
  constructor(id){
    this.element = document.getElementById(id)
  }
  getElement(){
    return this.element.value
  }
  setElement(value){
    this.element.innerHTML = value
  }
}



class CtrlElement2 extends Element{
 constructor(id){
    super(id)
    this.data = 0
    this.type = id + `: `
    this.updateInfo()
  }
  handleData(value, set = false) {
    this.data = set ? value : this.data + value
    this.updateInfo()
  }
  updateInfo(){
    this.setElement(this.type + this.data)
  }
  reset(){
    this.data = 0
    this.updateInfo()
  }
}

class SelectSpeed2 extends Element{
  constructor(id='speedSelector'){
    super(id)
  }
  getValue(){
    return Number(this.getElement())
  }
}

class Status2 {
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
