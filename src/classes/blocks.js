import {row, col} from '../utils'

class Block {
  constructor(value, options) {
    this.value = value;
    this.options = options;
  }

  toHTML() {
    throw new Error('Метод toHTML должен быть реализован')
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const {tag = 'h2', styles} = this.options;

    return row(col(`
      <${tag}>${this.value}</${tag}>
    `), styles);
  }
}

export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const {alt, styles, imageStyles} = this.options;
    const img = `<img src="${this.value}" alt="${alt}" style="${imageStyles}">`
    return row(img, styles);
  }
}

export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    return row(col(`<p style="margin-bottom:0;">${this.value}</p>`), this.options.styles);
  }
}

export class TextColumnsBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const cols = this.value.map(item => col(item));  
    return row(cols.join(''), this.options.styles);
  }
}