var cells = [];
var stopping;

function setup() {
  createCanvas(650, 650);
  frameRate(24);

  stopping = false;

  for(let i = 0; i < 20; i++) {
    cells.push(new Cell());
  }
  
}

function mitosis(cell, i){
    let x = cell.pos.x;
    let y = cell.pos.y;
    let r = cell.r /2;
    let c = cell.c;

    cells.push(new Cell(x,y, r, c));
    cells.push(new Cell(x,y, r, c));

    cells.splice(i,1);
}

function mousePressed(){
  for(let i = 0; i < cells.length; i++){
    let cell = cells[i];

    if(dist(cell.pos.x, cell.pos.y, mouseX, mouseY) <= cell.r){
      let x = cell.pos.x;
      let y = cell.pos.y;
      let r = cell.r /2;
      let c = cell.c;

      cells.push(new Cell(x,y, r, c));
      cells.push(new Cell(x,y, r, c));

      cells.splice(i,1);

      break;
    }
  }
}

function keyPressed(){
  if(keyCode == 80){
    stopping = !stopping;
  }
}

function draw() {
  if(!stopping){

    for(let i = 0; i < cells.length; i++){
      let cell = cells[i];

      if(random(0,1) >= 0.99){
        mitosis(cell, i);
      }
      cell.move();
    }
  }

  background(0);
  for(let cell of cells){
    cell.show();
  }
}
