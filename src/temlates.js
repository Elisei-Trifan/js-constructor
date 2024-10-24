import { row, col } from './utils'

function title(item) {
  return row(col(`<h1>${item.value}</h1>`))
}

function paragraf(item) {
  return row(col(`<p>${item.value}</p>`))
}

function columns(item) {
  const html = item.value.map((item) => col(item))
  return row(html.join(''))
}

function image(item) {
  return row(item.value)
}

export const temlates = {
  title,
  image,
  columns,
  paragraf,
}
