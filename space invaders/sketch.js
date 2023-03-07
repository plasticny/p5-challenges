let ship;
let arrows = [];
let eArrows = [];
let aliens = [];
let shields = [];

let stopping;
let end;

function setup() {
  createCanvas(650, 650);

  ship = new Ship(width/2, height, 20);

  for(let y = 1; y <= 4; y++){
    for(let x = 1; x <= 7; x++){
      aliens.push(new Alien(60*x,60*y));
    }
  }

  shields.push(new Shield(150,550));
  shields.push(new Shield(width/2,550));
  shields.push(new Shield(500,550));

  stopping = true;
  end = false;

  Alien.minX = width;
  Alien.maxX = 0;
  Alien.minY = 0;
  Alien.maxY = height;
}

function keyPressed(){
  if(keyCode == 32 && ship.arrow_amt != 0 && !stopping && !end){
    let arrow = ship.fire();
    if(arrow){
      arrows[arrows.length] = arrow;
    }
  }
}

function mousePressed(){
  stopping = !stopping;
}

function draw() {
  background(0);

  if(!stopping && !end){

    shipControl();
  
    //alter arrows
    for(let i = 0; i < arrows.length; i++){
      let arrow = arrows[i];

      if(arrow.y <= Alien.maxY && arrow.y >= Alien.minY){
        for(let j = 0; j < aliens.length; j++){
          //hit an alien
          if(dist(arrow.x, arrow.y, aliens[j].x, aliens[j].y) <= 20){
            aliens.splice(j,1);
            arrows.splice(i,1);
            arrow = null;
            break;
          }
        }
      }
  
      if(arrow){
        //reach top edge
        if(arrow.y <= 0){
          arrows.splice(i,1);
        }else{
          arrow.move();
        }
      }
    }
  
    //alter aliens
    for(let a of aliens){
      a.move();

      let p = map(aliens.length, 28, 1, 0.999, 0.997);
      if(random(0,1)>p){
        eArrows.push(new Arrow(a.x, a.y, 0));
      }

      //hit the ship
      if(a.y >= height - ship.h*1.5){
        if(dist(ship.x, ship.y, a.x, a.y) <= 15){
          end = true;
        }else if(a.y >= height){
          end = true;
        }
      }
    }

    //aliens arrow
    for(let i = 0; i < eArrows.length; i++){
      let arrow = eArrows[i];

      if(arrow){
        //reach bottom edge
        if(arrow.y >= height){
          eArrows.splice(i,1);
        }else{
          arrow.move();
        }
      }
      
      if(arrow.y >= height - ship.h*1.5){

        if(dist(arrow.x, arrow.y, ship.x, ship.y) <= 15){
          end = true;
        }
      }
    }
  
    //reach the edge
    if(Alien.maxX > width-15 || Alien.minX < 15){
      if(Alien.maxX > width-15){
        Alien.maxX = width-15;
      }else{
        Alien.minX = 15;
      }
  
      for(let a of aliens){
        a.changeDir();
      }
    }

    //all aliens are killed
    if(aliens.length == 0){
      end = true;
    }
  }

  //show
  ship.show();
  for(let a of aliens){
    a.show();
  }
  for(let arrow of eArrows){
    arrow.show();
  }
  for(let ar of arrows){
    ar.show();
  }
  for(let s of shields){
    s.show();
  }
}

function shipControl(){
  //control ship
  if(keyIsDown(LEFT_ARROW)){
    ship.move(-1);
  }else if(keyIsDown(RIGHT_ARROW)){
    ship.move(1);
  }

  if(ship.arrow_amt == 0){
    ship.reload();
  }
}

function friendlyArrowControl(){

}
