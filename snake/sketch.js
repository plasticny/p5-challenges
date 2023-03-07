var snake;
var head;
var food;

var stop = true;

const scl = 20;

function setup() {
  createCanvas(660, 660);

  head = new Body(120,120,scl);
  snake = new Snake(head);
  food = new Food(scl);
  food.newFood();

  frameRate(8);
}

function mousePressed(){
  if(!stop){
    snake.stop();
  }else{
    snake.resume();
  }

  stop = !stop;
}

function keyPressed(){
  if(keyCode == UP_ARROW){
    snake.dir(0,-1);
  }else if(keyCode == DOWN_ARROW){
    snake.dir(0,1);
  }else if(keyCode == RIGHT_ARROW){
    snake.dir(1,0);
  }else if(keyCode == LEFT_ARROW){
    snake.dir(-1,0);
  }
}

function draw() {
  background(0);

  if(snake.eat(food)){
    food.newFood();
  };

  if(!stop){
    stop = snake.move();
  }
  
  snake.show();

  food.show();
}
