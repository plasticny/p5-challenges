class Tree{
    static rootLen = 50;

    constructor(x,y){
        this.pos = createVector(x,y);
        this.root = new Branch(Tree.rootLen);
    }

    draw(){
        translate(this.pos.x, this.pos.y);
        this.root.draw(0);
    }
}