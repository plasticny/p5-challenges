let stars = [];

function setup() {
  createCanvas(650, 650);
  for(let i = 0; i < 800; i++){
    stars[i] = new Star();
  }
}

function draw() {
  background(0);
  translate(width/2, height/2);

  for(let i = 0; i < stars.length; i++){
    stars[i].update();
    stars[i].show();
  }
}
