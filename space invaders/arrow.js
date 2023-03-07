class Arrow{
    constructor(x, y, side){
        this.x = x;
        this.y = y;
        this.r;
        this.speed;

        if(side == 1){
            //player side
            this.speed = 20;
            this.r = 20;
        }else{
            this.speed = -10;
            this.r = 15;
        }
    }

    move(){
        this.y -= this.speed;
    }

    show(){
        push();
        translate(this.x-5, this.y-5);

        if(this.speed > 0){
            fill(0,255,0);
            ellipse(0,0, this.r);
        }else{
            fill(255,0,0);
            rect(0,0,this.r,this.r);
        }
        
        pop();
    }
}