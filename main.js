//create container & header
var grid = document.createElement("section");
grid.id = "container";
var header = document.createElement("header");
document.body.appendChild(header);
header.innerHTML = "LITE-BRITE";
document.body.appendChild(grid);

//create rows and circles
for (var i = 0; i < 24; i++) {
  var row = document.createElement('div');
  grid.appendChild(row);
  row.style.clear = "both";
  for (var j = 0; j <40; j++) {
    var circle = document.createElement('div');
    grid.appendChild(circle);
    circle.className = "circle";
    circle.addEventListener('mousedown', changeColor);
  }
}

//functions for event listeners
var color;
function getColorFromPalette(event) {
  color = this.style.backgroundColor;
  pSquare.style.backgroundColor = color;
}
function changeColor(event) {
  this.style.backgroundColor = color; ///we will get the color from getColorFromPalette function
}
function outline(event) {
  this.style.boxShadow = "0 0 25px rgba(81, 203, 238, 1)";

}
function reset(event) {
  var children = document.getElementById('container').getElementsByTagName('div');
  for (var i = 0; i < children.length; i++) {
    children[i].style.backgroundColor = "black";
  }
}


//palette selector
var colors = ["#49fb35", "#ff0101", "yellow", "#4D4DFF", "#FF00FF", "#993CF3", "#FF4105", "white", "black"];
var paletteSection = document.createElement("section");
document.body.appendChild(paletteSection);
paletteSection.style.margin = "30px 0 0 3%";
for(var i = 0; i < 1; i++) {
  var pRow = document.createElement('div');
  paletteSection.appendChild(pRow);
  for (var j = 0; j <= 8; j++) {
    var pCircle = document.createElement('div');
    pCircle.className = "pCircle";
    paletteSection.appendChild(pCircle);
    pCircle.style.backgroundColor = colors[j];
    pCircle.setAttribute('tabindex', "10");
    pCircle.addEventListener('click', getColorFromPalette);
    // pCircle.addEventListener('focusin', outline);
  }

}

var eSquare = document.createElement('button');
paletteSection.appendChild(eSquare);
eSquare.className = 'eSquare';
eSquare.textContent = "Reset";
eSquare.addEventListener('click', reset);




//this creates a box to let person know which color they selected;
// var pSquare = document.createElement('div');
// paletteSection.appendChild(pSquare);
// pSquare.style.height = '.1%';
// pSquare.style.width = '5%';
// pSquare.style.border = '1px solid black';
// pSquare.style.padding = '1%';
// pSquare.style.display = 'inline-block';
// pSquare.style.marginLeft = '5%';
// pSquare.textContent = "Selected Color";
// pSquare.style.textAlign = "center";
// pSquare.style.backgroundColor = "white";