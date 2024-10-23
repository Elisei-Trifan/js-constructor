function title(item) {
  return `
          <div class="row">
            <div class="col-sm">
              <h1>${item.value}</h1>
            </div>
          </div>
  `
}

function paragraf(item) {
  return `
          <div class="row">
            <div class="col-sm">
              <p>${item.value}</p>
            </div>
          </div>
      `
}

function columns(item) {
  const html = item.value.map((item) => `<div class="col-sm">${item}</div>`)
  return `
          <div class="row">
            ${html.join('')}
          </div>
    `
}

function image(item) {
  return `
      <div class="row">
        <div class="col-sm">
          <img src="${item.value}"/>
        </div>
      </div>
  `
}

export const temlates = {
  title,
  image,
  columns,
  paragraf,
}
