import { model } from './model'
import { Site } from './classes/site'
import './styless/main.css'

const site = new Site('#site')

site.render(model)
