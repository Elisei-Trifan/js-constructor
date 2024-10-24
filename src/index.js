import { model } from './model'
import { Site } from './classes/site'
import './styless/main.css'
import { Sidebar } from './classes/sidebar'

const site = new Site('#site')

site.render(model)

const updateCall = (newBlock) => {
  model.push(newBlock)
  site.render(model)
}

new Sidebar('#panel', updateCall)
