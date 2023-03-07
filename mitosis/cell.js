class Cell{

    constructor(x,y,r,c){
        if(x && y){
            this.pos = createVector(x, y);
        }else{
            this.pos = createVector(random(width), random(height));
        }

        if(r){
            this.r = r;
        }else{
            this.r = 100;
        }
        
        if(c){
            this.c = c;
        }else{
            this.c = color(random(0,255),0,random(0,255),100);
        }

        
    }

    move(){
        this.pos.add(createVector(random(-5,5),random(-5,5)));
    }

    show(){
        let pos = this.pos;

        

        push();
        noStroke();
        fill(this.c, 100);
        ellipse(pos.x, pos.y, this.r);
        pop();
    }
}