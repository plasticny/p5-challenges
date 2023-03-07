let grid;

const da = 1,
      db = 0.5,
      f = 0.055,
      k = 0.062;
//weight
const cen = -1,
      adj = 0.2,
      dia = 0.05;

function setup() {
  createCanvas(200, 200);
  pixelDensity(1);
  stopping = true;

  grid = [];

  for(let y = 0; y < height; y++){
    grid[y] = [];
    for(let x = 0; x < width; x++){
      grid[y][x] = {a: 1, b: 0};
    }
  }

  dropBlack();
}

function dropBlack(){
  for(let x = 99; x <= 101; x++){
    for(let y = 99; y <= 101; y++){
      grid[y][x] = {a: 0, b: 1};
    }
  }
  
  for(let x = 50; x < width-50; x++){
    grid[50][x] = {a: 0, b:1};
  }
  for(let x = 50; x < width-50; x++){
    grid[150][x] = {a: 0, b:1};
  }
}

function keyPressed() {
  if(keyCode == 80){
    stopping = !stopping;
  }
}

function mousePressed(){
	
}

function laplacian(x, y){
  let sumA = 0, sumB = 0;

  /*
   0.05 0.2  0.05
   0.2  -1   0.2
   0.05 0.2  0.05
  */
  for(let dx = -1; dx <= 1; dx++){
    for(let dy = -1; dy <= 1; dy++){
      let alt_x = x+dx, alt_y = y+dy;

      if(
        alt_x >= 0 && alt_x < width &&
        alt_y >= 0 && alt_y < height
      )
      if(dx == 0 && dy == 0){
        //center case
        sumA += grid[y][x].a * cen;
        sumB += grid[y][x].b * cen;
      }else if(dx == 0 || dy == 0){
        //adj case
        sumA += grid[alt_y][alt_x].a * adj;
        sumB += grid[alt_y][alt_x].b * adj;
      }else{
        //dia case
        sumA += grid[alt_y][alt_x].a * dia;
        sumB += grid[alt_y][alt_x].b * dia;
      }
    }
  }

  return {a: sumA, b: sumB};
}

function update(){
  for(let y = 0; y < height; y++){
    for(let x = 0; x < width; x++){
      let a = grid[y][x].a;
      let b = grid[y][x].b;
      let lap = laplacian(x, y);

      grid[y][x].a = a + (da*lap.a - a*b*b + f*(1-a));
      grid[y][x].b = b + (db*lap.b + a*b*b - (k+f)*b);
    }
  }
}

function draw() {
  if(!stopping) {
    update(); 
  }

  background(0);

  loadPixels();
  for(let x = 0; x < width; x++){
    for(let y = 0; y < height; y++){
      let pix = (x+y*width)*4;
      let c = floor((grid[y][x].a-grid[y][x].b)*255);
      pixels[pix] = c;
      pixels[pix+1] = c;
      pixels[pix+2] = c;
      pixels[pix+3] = 255;
    }
  }
  updatePixels();
}
