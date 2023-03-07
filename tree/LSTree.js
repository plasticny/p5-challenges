class LSTree{
    constructor(x,y){
        this.root = createVector(x,y);
        this.branchLen = 25;
        this.system = new LSystem();
        this.angle = radians(30);
    }

    draw(){
        let sentence = this.system.generate();
        this.branchLen /= 1.5;

        stroke(255,100);
        
        push();

            translate(this.root.x, this.root.y);

            for(let letter of sentence){
                switch(letter){
                    case('F'):
                        line(0,0,0,-this.branchLen);
                        translate(0, -this.branchLen);
                        break;
                    case('+'):
                        rotate(this.angle);
                        break;
                    case('-'):
                        rotate(-this.angle);
                        break;
                    case('['):
                        push();
                        break;
                    case(']'):
                        pop();
                        break;
                }
            }

        pop();
    }
}