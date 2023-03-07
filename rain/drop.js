class Drop{
    constructor(){
        this.x = random(width);
        this.y = random(height);
        this.z = random(width);
        this.len = random(10,25);
        this.py = this.y;

        this.speed = random(5,9);
    }

    acc(){
        this.py = this.y - this.len;
        this.y += this.speed;
        this.speed += 0.01;
        if(this.y >= height){
            this.y = 0;
            this.py = 0;
            this.speed = random(5,9);
        }
        
    }

    show(){
        push();
        stroke(150,200);
        let r = map(this.z, 0, width, 0.1, 3);
        strokeWeight(r);
        line(this.x, this.py, this.x, this.y);
        pop();
    }
}