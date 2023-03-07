//recur solution
//const da = 0.3;

//OO solution
//let tree;

//L-system
let lsTree;

function setup() {

  //L-system
  createCanvas(200,200);
  background(0);
  lsTree = new LSTree(width/2, height);

  /*comment(L-system)
    createCanvas(201, 201);
    stopping = false;

    //OO solution
    //tree = new Tree(width/2, height);
  */

}

function keyPressed() {
  if(keyCode == 80){
    stopping = !stopping;
  }else if(keyCode == LEFT_ARROW){
    lsTree.draw();
  }
}
function mousePressed(){
	
}

/*recursive solution*/
function branch(len, angle){
  line(0,0,0,-len);
  translate(0,-len);
  if(len > 2){
    push();
    rotate(angle+da);
    branch(len/1.5, angle+da);
    pop();
    push();
    rotate(angle-da);
    branch(len/1.5, angle-da);
    pop();
  }
}
function recursiveSol(){
  translate(width/2, height);
  stroke(255);
  branch(50, 0);
}

//OO Solution
function ooSol(){
  stroke(255);
  tree.draw();
}

//comment this function if using L-system
/*
function draw() {
  if(!stopping) {
    
  }

  background(0);

  //recursiveSol();

  //ooSol();
}*/
