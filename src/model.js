import image from './assets/imager.png'
import {
  TitleBlock,
  ImageBlock,
  ColumnsBlock,
  ParagrafBlock,
} from './classes/block'

const text = `Крутые сайт-портфолио, созданный Трифан Елисеем: <a href="http://f76072it.beget.tech/"> Сайт-портфолио</a>`

export const model = [
  new TitleBlock('Конструктор сайтов на JavaScript Vanilla', {
    tag: 'h2',
    styles: {
      background: 'linear-gradient(to right, #ff0099, #493240)',
      color: '#fff',
      padding: '1.5rem',
      'text-align': 'center',
    },
  }),
  //   {
  //     type: 'title',
  //     value: 'Конструктор сайтов на JavaScript Vanilla',
  //     options: {
  //       tag: 'h2',
  //       styles: {
  //         background: 'linear-gradient(to right, #ff0099, #493240)',
  //         color: '#fff',
  //         padding: '1.5rem',
  //         'text-align': 'center',
  //       },
  //     },
  //   },

  new ImageBlock(image, {
    styles: {
      padding: '2rem 0',
      display: 'flex',
      'justify-content': 'center',
    },
    imageStyles: {
      width: '500px',
      height: 'auto',
    },
    alt: 'Это картинка',
  }),

  //   {
  //     type: 'image',
  //     value: image,
  //     options: {
  //       styles: {
  //         padding: '2rem 0',
  //         display: 'flex',
  //         'justify-content': 'center',
  //       },
  //       imageStyles: {
  //         width: '500px',
  //         height: 'auto',
  //       },
  //       alt: 'Это картинка',
  //     },
  //   },

  new ColumnsBlock(
    [
      'Приложение на чистом JavaScript, без использования библиотек',
      'Узнаешь как работаеют принципы SOLID и ООП в JavaScript за один курс',
      'JavaScript - это просто, интересно. Научись создавать любые UI своими руками',
    ],
    {
      styles: {
        background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
        padding: '2rem',
        color: '#fff',
        'font-weight': 'bold',
      },
    }
  ),

  //   {
  //     type: 'columns',
  //     value: [
  //       'Приложение на чистом JavaScript, без использования библиотек',
  //       'Узнаешь как работаеют принципы SOLID и ООП в JavaScript за один курс',
  //       'JavaScript - это просто, интересно. Научись создавать любые UI своими руками',
  //     ],
  //     options: {
  //       styles: {
  //         background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
  //         padding: '2rem',
  //         color: '#fff',
  //         'font-weight': 'bold',
  //       },
  //     },
  //   },

  new ParagrafBlock(text, {
    styles: {
      background: 'linear-gradient(to left, #f2994a, #f2c94c)',
      padding: '1rem',
      'font-weight': 'bold',
    },
  }),
  //   {
  //     type: 'paragraf',
  //     value: text,
  //     options: {
  //       styles: {
  //         background: 'linear-gradient(to left, #f2994a, #f2c94c)',
  //         padding: '1rem',
  //         'font-weight': 'bold',
  //       },
  //     },
  //   },
]
