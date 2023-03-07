class Shadow{
    constructor(){
        this.x = random(width);
        this.y = random(height);
        this.r = random(10,20);
        this.t = 0;

        this.max = random(60,80);
    }

    show(){
        push();
        noStroke();
        fill(100,this.t);
        
        this.t += 1;
        this.r += 1;
        ellipse(this.x, this.y, this.r);
        pop();

        if(this.t >= this.max){
            return true;
        }
    }
}