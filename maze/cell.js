class Cell{
    static side = 25;

    constructor(x,y){
        this.pos = createVector(x,y);
        this.visited = false;
        this.walls = [
             1,
            1,1,
             1
        ];
        this.c = color(100,0,100);
    }

    show(){
        let x = this.pos.x*Cell.side + EDGE;
        let y = this.pos.y*Cell.side + EDGE;
        let dx = x+Cell.side;
        let dy = y+Cell.side;
        let walls = this.walls;

        if(this.visited){
            fill(this.c);
            stroke(this.c);
            rect(x,y,Cell.side);
        }

        stroke(255);
        if(walls[0]){
            line(x,y,dx,y);}
        if(walls[1]){
            line(x,y,x,dy);}
        if(walls[2]){
            line(dx,dy,dx,y);
        }if(walls[3]){
            line(dx,dy,x,dy);
        }
    }
}