class Ship{
    static MAX_AMT = 15;

    constructor(x, y, h){
        this.x = x;
        this.y = y - h;
        this.h = h;

        this.color = 255;

        this.arrow_amt = Ship.MAX_AMT;

        this.reloadStart = null;

        this.speed = 5;
    }
    
    reload(){
        if(this.reloadStart == null){
            this.reloadStart = millis();
        }else{
            if(millis() - this.reloadStart >= 3000){
                this.arrow_amt = Ship.MAX_AMT;
                this.color = 255;
                this.reloadStart = null;
            }
        }
    }

    fire(){
        if(this.arrow_amt != 0){
            this.arrow_amt--;
            
            if(this.arrow_amt == 0){
                this.color = 100;
                this.reload();
            }
            return new Arrow(this.x, this.y, 1);
        }
    }

    move(dir){
        this.x += dir*this.speed;
        this.x = constrain(this.x, 20, width - 20);
    }

    show(){
        let x = this.x;
        let y = this.y;
        let h = this.h;

        push();
        noStroke();
        fill(this.color);
        
        translate(x-h/2, y);
        rect(0, 0, h, h);

        translate(h/4, -h/2);
        rect(0, 0, h/2, h/2);

        pop();
    }
}