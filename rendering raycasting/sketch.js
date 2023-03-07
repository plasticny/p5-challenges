let walls = [];
let ray;
let particle;

const W2D = 400;
const H2D = 400;
let slideFOV;

function setup(){
    createCanvas(800, 400);
    for(let i = 0; i < 5; ++i){
        let x1 = random(W2D);
        let x2 = random(W2D);
        let y1 = random(H2D);
        let y2 = random(H2D);

        walls[i] = new Boundary(x1, y1, x2, y2);
    }
    walls.push(new Boundary(0, 0, W2D, 0));
    walls.push(new Boundary(W2D, 0, W2D, H2D));
    walls.push(new Boundary(W2D, H2D, 0, H2D));
    walls.push(new Boundary(0, H2D, 0, 0));
    
    particle = new Particle();

    slideFOV = createSlider(0,360,45);
    slideFOV.input(changeFOV);
}

function changeFOV(){
    const fov = slideFOV.value();
    particle.updateFOV(fov);
}

function draw(){
    if (keyIsDown(LEFT_ARROW)){
        particle.rotate(-0.05);
    }else if(keyIsDown(RIGHT_ARROW)){
        particle.rotate(0.05);
    }
    
    if(keyIsDown(UP_ARROW)){
        particle.move(1);
    }else if(keyIsDown(DOWN_ARROW)){
        particle.move(-1);
    }

    background(0);
    for(let wall of walls){
        wall.show();
    }

    //particle.update(mouseX, mouseY);
    particle.show();

    const scene = particle.look(walls);
    const w = W2D / scene.length;

    push();
    translate(W2D, 0);
    const wSq = W2D * W2D;
    for(let i = 0; i < scene.length; i++){

        const sq = scene[i] * scene[i];
        const b = map(sq, 0, wSq, 255, 0);
        const h = map(scene[i], 0, H2D, H2D, 0);

        fill(b);
        stroke(b);
        rectMode(CENTER);
        rect(i*w + w/2, H2D/2, w, h);
    }
    pop();

    //let pt = ray.cast(wall);
    //if(pt){
    //    line(255);
    //    ellipse(pt.x, pt.y, 8, 8);
    //}
    
    //delete pt;
}