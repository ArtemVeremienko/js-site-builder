import {model} from './model';
import './styles/index.css';

model.forEach(block => {
  let html;
  if (block.type === 'title') {
    html = title(block);
  } else if (block.type === 'text') {
    html = text(block);
  } else if (block.type === 'textColumns') {
    html = textColumns(block);
  }

  document.querySelector('#site').insertAdjacentHTML('beforeend', html);
});

function title(block) {
  return `
    <div class="row">
      <div class="col-sm">
        <h1>${block.value}</h1>
      </div>
    </div>
  `
}

function text(block) {
  return `
    <div class="row">
      <div class="col-sm">
        <p>${block.value}</p>
      </div>
    </div>
  `;
}

function textColumns(block) {
  const cols = block.value.map(item => `<div class="col-sm">${item}</div>`)
  
  return `
    <div class="row">
      ${cols.join('')}
    </div>
  `;
}