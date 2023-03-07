class Food{
    constructor(r){
        this.r = r;
    }

    newFood(){
        this.x = floor(random(width/scl))*scl;
        this.y = floor(random(height/scl))*scl;
    }

    show(){
        push();
        fill(255,0,0);
        rect(this.x, this.y, this.r);
        pop();
    }
}