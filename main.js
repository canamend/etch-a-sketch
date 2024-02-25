const button = document.querySelector('#button');
const container = document.querySelector('#container');
const createGrid = ( size ) => {
  let row;
  let col;

  for(let i = 0; i<size; i++){
    row = document.createElement('div');
    row.classList.add('row');
    for( let j = 0; j<size; j++ ){
      col = document.createElement('div');
      col.classList.add('color');
      col.addEventListener('mouseleave', event => {
        let element = event.fromElement;
        increaseOpacity(element);
      });
      col.classList.add('col');
      row.appendChild(col);
    }
    container.appendChild(row);
  }
}

const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}


const increaseOpacity = (element) => {
  let currentOpacity = getComputedStyle(element).getPropertyValue('opacity');
  if(currentOpacity < 0.9)
    element.style.opacity = +currentOpacity + 0.2;
}

createGrid(16, 16);

button.addEventListener('click', () => {
  let size = prompt('Select number of squares per side for the new grid');
  if(size>100) size = 100;
  removeAllChildNodes(container)
  createGrid(size);
});
