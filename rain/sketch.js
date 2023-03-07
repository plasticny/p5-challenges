var rain = [];
var shadow = [];
var stop = true;

function setup() {
  createCanvas(650, 650);

  for(let i = 0; i < 200; i++){
    rain[i] = new Drop();
  }

  frameRate(60);
}

function mousePressed(){
  stop = !stop;
}

function draw() {
  background(0);
  if(!stop){
    if(random(0,10) >= 9){
      shadow.push(new Shadow());
    }
  }
  

  for(let i = 0; i < rain.length; i++){
    rain[i].show();
    if(!stop){
      rain[i].acc();
    }
  }

  for(let i = 0; i < shadow.length; i++){
    if(!stop){
      if(shadow[i] != null && shadow[i].show()){
        shadow[i] = null;
      }
    }
  }
}
