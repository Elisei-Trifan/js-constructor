export class Site {
  constructor(selector) {
    this.element = document.querySelector(selector)
  }

  render(model) {
    model.forEach((item) => {
      this.element.insertAdjacentHTML('beforeend', item.toHTML())
    })
  }
}
