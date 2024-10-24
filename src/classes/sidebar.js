import { block } from '../utils'

export class Sidebar {
  constructor(selector) {
    this.element = document.querySelector(selector)
    this.init()
  }

  init() {
    this.element.insertAdjacentHTML('afterbegin', this.temlate)
    this.element.addEventListener('submit', this.addBlock)
  }

  get temlate() {
    return [block('text'), block('title')].join('')
  }

  addBlock(event) {
    event.preventDefault()
  }
}
