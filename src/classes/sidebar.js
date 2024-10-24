import { block } from '../utils'
import { ParagrafBlock, TitleBlock } from './block'

export class Sidebar {
  constructor(selector, updateCall) {
    this.element = document.querySelector(selector)
    this.update = updateCall
    this.init()
  }

  init() {
    this.element.insertAdjacentHTML('afterbegin', this.temlate)
    this.element.addEventListener('submit', this.addBlock.bind(this))
  }

  get temlate() {
    return [block('text'), block('title')].join('')
  }

  addBlock(event) {
    event.preventDefault()

    const type = event.target.name
    const value = event.target.value.value
    const styles = event.target.styles.value

    const newBlock =
      type === 'text'
        ? new ParagrafBlock(value, { styles })
        : new TitleBlock(value, { styles })

    this.update(newBlock)

    event.target.value.value = ''
    event.target.styles.value = ''
  }
}
