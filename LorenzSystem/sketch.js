let x, y, z;
let points;

let rx, ry, rz;

const dt = 0.01;
const a = 10, b = 20, c = 8/3;
const scl = 10;

function setup() {
  createCanvas(650, 650, WEBGL);
  stopping = false;

  points = [];
  x = 0.01;
  y = 0;
  z = 0;

  rx = 0;
  ry = 0;
  rz = 0;

  
}

function keyPressed() {
  if(keyCode == 80){
    stopping = !stopping;
  }
}

function draw() {
  if(!stopping) {
    let dx = a*(y-x)*dt;
    let dy = (x*(b-z)-y) * dt;
    let dz = (x*y - c*z) * dt;

    x += dx;
    y += dy;
    z += dz;

    console.log(x, y, z);

    points.push(createVector(x,y,z));
  }

  //console.log(points.length);

  

  rotateX(rx);
  rotateY(ry);
  rotateZ(rz);

  rx += 0.01;
  ry += 0.01;
  rz += 0.01;

  //translate(-width/2, -height/2);
  //translate(0,0);
  
  background(0);
  for(let p of points){
    stroke(255);
    fill(255);
    point(p.x*scl, p.y*scl, p.z*scl);
  }
}
