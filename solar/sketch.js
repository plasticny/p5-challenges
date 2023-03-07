var sun;

function setup() {
  createCanvas(650, 650);

  sun = new Planet(80,0,0,0);
  let earth = new Planet(20, 5, 50, 0.001);
  let moon = new Planet(10, 0, 0, 0.05);
  let planetX = new Planet(40, 10, 120, 0.003);

  earth.hasPlanet(moon);
  sun.hasPlanet(earth);
  sun.hasPlanet(planetX);

  stopping = false;
}

function draw() {

  if(!stopping)
    sun.move();

  background(0);
  translate(width/2, height/2);
  sun.show();
}
