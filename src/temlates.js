import { row, col, css } from './utils'

function title(item) {
  const { tag = 'h1', styles } = item.options
  return row(col(`<${tag}>${item.value}</${tag}>`), css(styles))
}

function paragraf(item) {
  return row(col(`<p>${item.value}</p>`), css(item.options.styles))
}

function columns(item) {
  const html = item.value.map((item) => col(item))
  return row(html.join(''), css(item.options.styles))
}

function image(item) {
  const { styles, imageStyles = {}, alt = '' } = item.options
  return row(
    `<img alt ="${alt}"src="${item.value}" style ="${css(imageStyles)}" />`,
    css(styles)
  )
}

export const temlates = {
  title,
  image,
  columns,
  paragraf,
}
