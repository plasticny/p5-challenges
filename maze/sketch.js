var maze;
var genBot;
var player;

function setup() {
  createCanvas(650, 650);

  stopping = true;

  COUNT_SIDE = width / Cell.side - 1;
  EDGE = Cell.side/2;

  maze = [];
  for(let y = 0; y < COUNT_SIDE; y++) {
    maze.push(new Array());
    for(let x = 0; x < COUNT_SIDE; x++) {
      maze[y][x] = new Cell(x, y);
    }
  }

  genBot = new GenBot(floor(COUNT_SIDE/2),0);

  player = new Player(floor(COUNT_SIDE/2),0);
}

function keyPressed() {
  if(keyCode == 80){
    stopping = !stopping;
  }else if (player != null){
    if(keyCode == 38) {
      //arrow up
      player.move(UP);
    }else if (keyCode == 40) {
      //arrow up
      player.move(DOWN);
    }else if (keyCode == 37) {
      //arrow up
      player.move(LEFT);
    }else if (keyCode == 39) {
      //arrow up
      player.move(RIGHT);
    }
  }
}

function draw() {
  if(!stopping && genBot.counter < COUNT_SIDE*COUNT_SIDE) {
    genBot.move();   
  }

  background(0);

  for(let row of maze){
    for(let cell of row){
      cell.show();
    }
  }
}
