import { row, col, css } from '../utils'

class Block {
  constructor(value, options) {
    this.value = value
    this.options = options
  }

  toHTML() {
    throw new Error('Метод toHTML должен быть реализован')
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }
  toHTML() {
    const { tag = 'h1', styles } = this.options
    return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
  }
}
export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    const { styles, imageStyles = {}, alt = '' } = this.options
    return row(
      `<img alt ="${alt}"src="${this.value}" style ="${css(imageStyles)}" />`,
      css(styles)
    )
  }
}
export class ColumnsBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    const html = this.value.map((item) => col(item))
    return row(html.join(''), css(this.options.styles))
  }
}
export class ParagrafBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    return row(col(`<p>${this.value}</p>`), css(this.options.styles))
  }
}
