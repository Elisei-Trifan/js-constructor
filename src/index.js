import { model } from './model'
import { temlates } from './temlates'
import './styless/main.css'

const site = document.querySelector('#site')

model.forEach((item) => {
  const toHTML = temlates[item.type]

  if (toHTML) {
    site.insertAdjacentHTML('beforeend', toHTML(item))
  }
})
