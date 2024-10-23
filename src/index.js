const model = [
  {
    type: 'title',
    value: 'Hello World from JS',
  },
  {
    type: 'paragraf',
    value: 'here we go with some text',
  },
  {
    type: 'columns',
    value: ['1111111', '2222222', '3333333', '44444'],
  },
  {
    type: 'image',
    value: '/assets/image.png',
  },
]

const site = document.querySelector('#site')

model.forEach((item) => {
  let html = ''
  if (item.type === 'title') {
    html = title(item)
  } else if (item.type === 'paragraf') {
    html = paragraf(item)
  } else if (item.type === 'columns') {
    html = columns(item)
  } else if (item.type === 'image') {
    html = image(item)
  }

  site.insertAdjacentHTML('beforeend', html)
})

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
