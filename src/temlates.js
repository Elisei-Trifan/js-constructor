import { row, col, css } from './utils'

function title(item) {
  const { tag = 'h1', styles } = item.options
  return row(col(`<${tag}>${item.value}</${tag}>`), css(styles))
}

function paragraf(item) {
  return row(col(`<p>${item.value}</p>`))
}

function columns(item) {
  const html = item.value.map((item) => col(item))
  return row(html.join(''))
}

function image(item) {
  return row(`<img src="${item.value}" />`)
}

export const temlates = {
  title,
  image,
  columns,
  paragraf,
}
