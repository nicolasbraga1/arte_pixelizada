window.onload = function () {
  //Variáveis globais
  const body = document.body;
  const grid = document.getElementById('grid');

  //Requisito 1
  // const h1 = document.getElementsByTagName('h1');
  // h1.id = 'title';
  // h1.innerText = "Paleta de Cores";


  //Requisito 2
  function addOptions() {
    const paleta = document.getElementById('color-palette');
    paleta.style.display = 'flex';
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
    first.classList.add('selected');
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
  const random = document.getElementById('random-colors');
  random.appendChild(button);
  let paleta = document.querySelector('#color-palette');
  button.addEventListener('click', addColor());


  //Requisito 5
  function keepColors() {
    const array = []
    const colored = document.getElementsByClassName('color');
    for (let i = 0; i < colored.length; i += 1) {
      array.push(colored[i].style.backgroundColor);
    }
    localStorage.setItem('colorPalette', JSON.stringify(array));
  }
    function returnColors() {
      document.querySelector('#color-palette').style.backgroundColor = JSON.parse(localStorage.getItem('colorPallete'));
    }

  //Requisito 6
  function createGrid() {
    const moreDiv = document.createElement('div');
    moreDiv.id = 'pixel-board';
    grid.appendChild(moreDiv);
    moreDiv.style.display = 'flex';
    moreDiv.style.flexWrap = 'wrap';
    moreDiv.style.width = '250px';
    //Requisito 7
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

  const pale = document.getElementById('color-palette');
  //Requisito 8 e 9
  pale.addEventListener('click', function (event) {
    let elemento = document.querySelector('.selected');
    elemento.classList.remove('selected');
    event.target.classList.add('selected');
  });
  //Requisito 10
  function paintPixels (){
    const selectedColor = document.querySelector('.selected');
    console.log(selectedColor);
    const style1 = selectedColor.style.backgroundColor;
    const pixelBoard = document.querySelector('#pixel-board');
    pixelBoard.addEventListener('click', function (event){
      console.log(document.querySelector('.selected'));
      const pixel = event.target;
      pixel.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
      console.log(pixel.style.backgroundColor);
    })
  }

  //Requisito 11
  const resetButton = document.createElement('button');
  resetButton.id = 'clear-board';
  resetButton.innerHTML = 'Limpar';
  const clearDiv = document.getElementById('resetButton');
  clearDiv.appendChild(resetButton);
  resetButton.addEventListener('click', function () {
    const pixel = document.getElementById('pixel-board');
    pixel.style.backgroundColor = 'white';
  });
  //Requisito 12



  //Chamada de funções
  addOptions();
  firstSquare();
  createColor();
  returnColors();
  addColor();
  keepColors();
  createGrid();
  paintPixels();
  // clearButton();
}