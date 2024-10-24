import image from './assets/imager.png'

export const model = [
  {
    type: 'title',
    value: 'Конструктор сайтов на JavaScript Vanilla',
    options: {
      tag: 'h2',
      styles: {
        background: 'linear-gradient(to right, #ff0099, #493240)',
        color: '#fff',
        'text-align': 'center',
      },
    },
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
    value: image,
  },
]
