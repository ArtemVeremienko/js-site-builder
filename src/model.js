import image from './assets/image.jpg';
import {TitleBlock, ImageBlock, TextBlock, TextColumnsBlock} from './classes/blocks';
import { css } from './utils';

export const model = [
  new TitleBlock('Site builder with Vanilla JS', {
      tag: 'h2',
      styles: css({
      background: 'linear-gradient(to right, #ff0099, #493240)',
      color: '#fff',
      'text-align': 'center',
      padding: '1rem',
    })
  }),
  new ImageBlock(image, {
    styles: 'padding: 2rem 0; justify-content: center;',
    alt: 'constructor image',
    imageStyles: 'width: 500px; height: auto'
  }),
  new TextBlock( 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', {
    styles: 'padding: 2rem 0; background: linear-gradient(to bottom, #8e2de2, #4a00e0); color: #fff; font-weight: bold;',
  }),
  new TextColumnsBlock([
    '1 text',
    '2 text',
    '3 text',
    '4 text',
  ],
  {
    styles: 'background: linear-gradient(to left, #f2994a, #f2c94c); fonr-weight: bold; padding: 1rem',
  }),
];