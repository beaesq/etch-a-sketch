function makeSketchpad (resolution) {

  let divSketchpad = document.querySelector('#sketchpad');

  for (let i = 1; i <= resolution; i++) {

    const divRow = document.createElement("div");
    divRow.classList.add('row');

    for (let j = 1; j <= resolution; j++) {
      const div = document.createElement ("div");
      div.id = `${i}-${j}`;
      div.classList.add('square');
      divRow.appendChild(div);
    }

    divSketchpad.appendChild(divRow);
  }

}

function changeSquareColor (id) {
  const div = document.getElementById(id);
  div.style.backgroundColor = color ? getRandomColor() : 'black';
}

function getRandomColor () {
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}

function resetSketchpadColor () {
  const allSquares = document.querySelectorAll('.square');
  allSquares.forEach(e => e.style.backgroundColor = 'white');
}

function toggleColor () {
  color = !color;
  resetSketchpadColor();
  const div = document.querySelector('#divChangeColor');
  div.textContent = color ? 'RANDOM' : 'BLACK';
}

function setGridSize () {
  let newSize = 0;
  
  do {
    newSize = parseInt(prompt('Set new grid size (1-100)', 16));
  } while (newSize > 100 || newSize < 1);
  
  clearSketchpad();
  resetSketchpadColor();
  makeSketchpad (newSize);
  startSketchpad();
}

function clearSketchpad () {
  const allSquares = document.querySelectorAll('.square');
  allSquares.forEach(e => e.remove());
  const allRows = document.querySelectorAll('.row');
  allRows.forEach(e => e.remove());
}

function startSketchpad () {
  const squares = document.querySelectorAll('.square');
  squares.forEach(sqr => sqr.addEventListener('mouseover', (e)=>changeSquareColor(e.target.id), false));
}

let color = false;
let initRes = 16;

makeSketchpad(initRes);
startSketchpad();


