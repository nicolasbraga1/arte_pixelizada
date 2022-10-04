//Variáveis globais
const body = document.body;
const paleta = document.createElement('section');

//Requisito 1
const h1 = document.createElement('h1');
h1.id = 'title';
h1.innerText = "Paleta de Cores";
body.appendChild(h1);

//Requisito 2
function addOptions() {
  paleta.style.display = 'flex';
  paleta.id = 'color-palette';
  body.appendChild(paleta);
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








//Chamada de funções
addOptions();
firstSquare();
createColor();
addColor();
buttonFunction();