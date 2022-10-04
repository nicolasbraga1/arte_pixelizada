//Variáveis globais
const body = document.body;
const paleta = document.getElementById('paleta');
const grid = document.getElementById('grid');

//Requisito 1
// const h1 = document.getElementsByTagName('h1');
// h1.id = 'title';
// h1.innerText = "Paleta de Cores";


//Requisito 2
function addOptions() {
  paleta.style.display = 'flex';
  paleta.id = 'color-palette';
  for (let i = 0; i < 4; i += 1) {
    const createDiv = document.createElement('div');
    createDiv.style.width = '50px';
    createDiv.style.height = '50px';
    createDiv.style.border = '1px solid black';
    createDiv.className = 'color';
    paleta.appendChild(createDiv);
  }
  return paleta;
}

function firstSquare() {
  const first = document.querySelector('.color');
  first.style.backgroundColor = 'black';
}

function createColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`
}

function addColor() {
  const getSquare = document.getElementsByClassName('color');
  for (let i = 1; i < getSquare.length; i += 1) {
    getSquare[i].style.backgroundColor = createColor();
  }
  return addColor;
}

//Requisito 4
const button = document.createElement('button');
button.id = 'button-random-color';
button.innerHTML = 'Cores aleatórias';
paleta.appendChild(button);
button.addEventListener('click', buttonFunction)

function buttonFunction() {
  const getSquare = document.querySelectorAll('.color');

  for (let i = 0; i < getSquare.length; i += 1) {
    paleta.removeChild(getSquare[i]);
  }
  addOptions();
  firstSquare();
  addColor();
}

//Requisito 5


//Requisito 6
function createGrid() {
  const moreDiv = document.createElement('div');
  moreDiv.id = 'pixel-board';
  grid.appendChild(moreDiv);
  moreDiv.style.display = 'grid';
  moreDiv.style.gridTemplateColumns = 'repeat(5, 10fr)';
  for (let i = 0; i < 25; i += 1) {
    const newDiv = document.createElement('div');
    newDiv.style.width = '40px';
    newDiv.style.height = '40px';
    newDiv.style.border = '1px solid black';
    newDiv.className = 'pixel';
    newDiv.style.backgroundColor = 'white';
    moreDiv.appendChild(newDiv);
  }
  return moreDiv;
}





//Chamada de funções
addOptions();
firstSquare();
createColor();
addColor();
buttonFunction();

createGrid();