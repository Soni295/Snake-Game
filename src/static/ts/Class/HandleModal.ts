import { HandleElement } from './HandleElement'
import { iElement } from './Interfaces'



export class HandleModal {
  btn: iElement
  constructor(){
    this.btn = new HandleElement('btn-modal')
    this.btn.element.onclick = () => console.log('hola')
  }
}
