let angle = 0;

let sponge;

function setup() {
  createCanvas(650, 650, WEBGL);
  normalMaterial();

  sponge = new Sponge(new Box(0,0,0,200));
  
}

function mousePressed(){
  sponge.generate();
}

function draw() {
  background(51);

  rotateX(angle);
  rotateY(angle*0.1);
  rotateZ(angle*0.4)

  stroke(0);
  fill(255);

  for(let i = 0; i < sponge.boxes.length; i++){
    sponge.boxes[i].show();
  }
  
  angle += 0.01;
}
