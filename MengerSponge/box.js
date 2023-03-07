class Box{
    constructor(x, y, z, r){
        this.pos = createVector(x, y, z);
        this.r = r;
    }

    show(){
        push();
        translate(this.pos.x, this.pos.y, this.pos.z);
        box(this.r);
        pop();
    }
}