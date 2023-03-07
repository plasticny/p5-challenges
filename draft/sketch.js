function setup() {
  createCanvas(201, 201);
  stopping = false;
}

function keyPressed() {
  if(keyCode == 80){
    stopping = !stopping;
  }
}

function mousePressed(){
	
}

function draw() {
  if(!stopping) {
    
  }

  background(0);
}
