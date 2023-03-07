let cols, rows;
const scl = 15;

let flying = 0;

let terrain = [];

function setup() {
  createCanvas(650, 650, WEBGL);
  stopping = false;

  let width = 1500, height = 1500;
  cols = width / scl;
  rows = height / scl;

  frameRate(24);
}

function keyPressed() {
  if(keyCode == 80){
    stopping = !stopping;
  }
}

function draw() {
  background(0);

  if(!stopping) {
    flying -= 0.1;

    let y_offset = 0;
    terrain = [];
    for(let y = 0; y < rows; y++, y_offset += 0.05) {
      let t = [], x_offset = flying;
      for(let x = 0; x < cols; x++, x_offset += 0.05) {
        t.push(map(noise(x_offset,y_offset),0,1,-150,150));
      }
      terrain.push(t);
    }
  }

  stroke(255);
  fill(0);

  rotateX(PI/2.5);

  translate(-width, -height);
  for(let y = 0; y < rows-1; y++) {
    beginShape(TRIANGLE_STRIP);
    for(let x = 0; x < cols-1; x++){
        vertex(x*scl, y*scl, terrain[x][y]);
        vertex(x*scl, y*scl+scl, terrain[x][y+1]);
    }
    endShape();
  }
}
