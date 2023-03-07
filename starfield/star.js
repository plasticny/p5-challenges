class Star{
    constructor(){
        this.x = random(-width, width);
        this.y = random(-height, height);
        this.z = random(width);

        this.pz = this.z;

        this.speed = 5;
    }

    update(){
        this.z -= this.speed;

        if(this.z <= 0){
            this.x = random(-width, width);
            this.y = random(-height, height);
            this.z = width;
            this.pz = this.z;
        }
    }

    show(){
        fill(255);
        noStroke();

        this.speed = map(mouseX, 0, width, 1, 10);

        let sx = map(this.x / this.z, -1, 1, -width, width);
        let sy = map(this.y / this.z, -1, 1, -height, height);
        let sz = map(this.z, 0, width, 20, 0);

        let px = map(this.x / this.pz, -1, 1, -width, width);
        let py = map(this.y /this.pz, -1, 1, -height, height);

        //ellipse(sx, sy, sz, sz);

        stroke(255);
        line(sx, sy, px, py);

        this.pz = this.z;
    }
}