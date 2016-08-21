// var body = document.getElementsByTagName('body')[0];
// var grid = document.createElement('section');
// body.appendChild(grid);
// var heightWidth = '1%';
//
// for(var i = 0; i < 25; i++){
//   var row = document.createElement('div');
//   grid.appendChild(row);
//   row.style.clear = 'both';
//   for(var j = 0; j < 43; j++){
//     var square = document.createElement('div');
//     row.appendChild(square);
//     square.style.height = heightWidth;
//     square.style.width = heightWidth;
//     square.style.float = 'left';
//     square.style.paddingTop = '1%';
//     square.style.margin = '0.1% 0.1% 0px 0px';
//     square.style.border = '.1px solid black';
//     square.style.boxSizing = 'border-box';
//
//   }
// }
//
// var palette = document.createElement('section');
// body.appendChild(palette);
// palette.style.clear = 'both';
//
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple','pink','grey']
//
// function targetingColor(someEvent) {
//   saveColor = someEvent.target.style.backgroundColor;
// }
//
// for(var i = 0; i < 1; i++){
//   for(var j = 0; j < 8; j++){
//     var paletteSquare = document.createElement('div');
//     document.getElementsByTagName('section')[1].appendChild(paletteSquare);
//     paletteSquare.style.height = '25px';
//     paletteSquare.style.width = '25px';
//     paletteSquare.style.paddingTop = '2px';
//     paletteSquare.style.margin = '2% 45px 0px 0px';
//     paletteSquare.style.display = 'inline-block';
//     paletteSquare.style.border = '1px solid black';
//     paletteSquare.style.borderRadius = '50%';
//     paletteSquare.style.backgroundColor = colors[j];
//     paletteSquare.addEventListener('click',targetingColor);
//
//   }
// }
// // var palettegrid = document.getElementsByTagName('section')[1];
//
//
// var clickSquare = document.querySelector('section');
// var saveColor = 'red';
//
// function targeting (event) {
//   // event.target.style.background = saveColor;
//     if(event.target.childElementCount === 0){
//     event.target.style.background = saveColor;
//   }
// }
//
// clickSquare.addEventListener('click',targeting);

var grid = document.createElement("section");
grid.id = "container";
var header = document.createElement("header");
document.body.appendChild(header);
header.innerHTML = "LITE-BRITE";
header.style.textAlign = "center";
header.style.color = "goldenrod";
header.style.fontFamily = "Anton, sans-serif";
header.style.fontSize = "100%";
header.style.letterSpacing = "8px";
header.style.paddingTop = "1%";
header.style.paddingLeft = "10%";
header.style.paddingBottom = "1%";
header.style.fontSize = "40px";
header.style.marginLeft = "3%";
header.style.marginRight = "17%";
header.style.backgroundColor = "black";
header.style.fontWeight = "bold";
grid.style.marginLeft = "5%";
grid.style.marginRight = "16%";
grid.style.boxSizing = "border-box";
grid.style.width = "100%";
grid.style.minWidth = "626px";
document.body.appendChild(grid);

for (var i = 0; i < 24; i++) {
  var row = document.createElement('div');
  grid.appendChild(row);
  row.style.clear = "both";
  for (var j = 0; j <40; j++) {
    var square = document.createElement('div');
    grid.appendChild(square);
    // square.style.height = "2%";
    // square.style.width = "2%";
    square.style.border = "1px solid gray";
    square.style.borderRadius = "50%";
    square.style.backgroundColor = "black";
    square.style.display = "inline-block";
    square.addEventListener('mousedown', changeColor);
    square.style.padding = "1%"
    square.style.float = "left";
    square.style.boxSizing = "border-box";
  }
}
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


//palette circles
var colors = ["#49fb35", "#ff0101", "yellow", "#4D4DFF", "#FF00FF", "#993CF3", "#FF4105", "white", "black"];
var paletteSection = document.createElement("section");
document.body.appendChild(paletteSection);
paletteSection.style.margin = "30px 0 0 3%";
for(var i = 0; i < 1; i++) {
  var pRow = document.createElement('div');
  paletteSection.appendChild(pRow);
  for (var j = 0; j <= 8; j++) {
    var pCircle = document.createElement('div');
    paletteSection.appendChild(pCircle);
    pCircle.style.backgroundColor = colors[j];
    pCircle.setAttribute('tabindex', "10");
    pCircle.style.height = ".1%";
    pCircle.style.width = ".1%";
    pCircle.style.border = "1px solid gray";
    pCircle.style.borderRadius = "50%";
    pCircle.style.display = "inline-block";
    pCircle.style.padding = "2%";
    pCircle.style.marginLeft = "2%";
    pCircle.addEventListener('click', getColorFromPalette);
    // pCircle.addEventListener('focusin', outline);
  }

}
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

var eSquare = document.createElement('button');
paletteSection.appendChild(eSquare);
eSquare.style.height = '50px';
// eSquare.style.width = '5%';
// eSquare.style.border = '1px solid black';
// eSquare.style.padding = '1%';
// eSquare.style.display = 'inline-block';
eSquare.style.marginLeft = '5%';
eSquare.style.marginBottom = '5px';
eSquare.textContent = "Reset";
eSquare.addEventListener('click', reset);
