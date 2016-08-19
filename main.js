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
var header = document.createElement("header");
document.body.appendChild(header);
header.textContent = "Welcome to the Wonderful World of Pixel Art!";
header.style.color = "navy";
header.style.fontFamily = "helvetica";
header.style.padding = "20px";
header.style.fontSize = "40px";
grid.style.marginLeft = "3%";
document.body.appendChild(grid);

for (var i = 0; i < 15; i++) {
  var row = document.createElement('div');
  grid.appendChild(row);
  for (var j = 0; j <30; j++) {
    var square = document.createElement('div');
    grid.appendChild(square);
    square.style.height = ".1%";
    square.style.width = ".1%";
    square.style.border = "1px solid black";
    square.style.display = "inline-block";
    square.addEventListener('click', changeColor);
    square.style.padding = "1%"

  }
}

function changeColor(event) {
  this.style.backgroundColor = "red";
}

//palette circles
var colors = ["red", "orange", "yellow", "green", "blue", "purple", "crimson", "teal", "coral", "white"];
var paletteSection = document.createElement("section");
document.body.appendChild(paletteSection);
paletteSection.style.margin = "30px 0 0 3%";
for(var i = 0; i < 1; i++) {
  var pRow = document.createElement('div');
  paletteSection.appendChild(pRow);
  for (var j = 0; j <= 9; j++) {
    var pCircle = document.createElement('div');
    paletteSection.appendChild(pCircle);
    pCircle.style.backgroundColor = colors[j];
    pCircle.style.height = ".1%";
    pCircle.style.width = ".1%";
    pCircle.style.border = "1px solid black";
    pCircle.style.borderRadius = "50%";
    pCircle.style.display = "inline-block";
    pCircle.style.padding = "2%";
    pCircle.style.marginLeft = "2%";
  }

}
