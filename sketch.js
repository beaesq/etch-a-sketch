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
let color = false;
let res = 16;

makeSketchpad(res);

const squares = document.querySelectorAll('.square');
squares.forEach(sqr => sqr.addEventListener('mouseover', (e)=>changeSquareColor(e.target.id), false));
