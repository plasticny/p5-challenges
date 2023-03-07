class Player{
    constructor(x,y){
        this.pos = createVector(x,y);
    }

    move(dir){
        let x = this.pos.x, y = this.pos.y;
        let wall;

        if(
            (x + dir[0] >= 0 && x + dir[0] < COUNT_SIDE) &&
            (y + dir[1] >= 0 && y + dir[1] < COUNT_SIDE)
        ){
            switch(dir){
                case UP:
                    wall = maze[y][x].walls[0];
                    break;
                case LEFT:
                    wall = maze[y][x].walls[1];
                    break;
                case RIGHT:
                    wall = maze[y][x].walls[2];
                    break;
                case DOWN:
                    wall = maze[y][x].walls[3]; 
                    break; 
            }

            console.log(wall);

            if(!wall){
                maze[y][x].c = color(100,0,100);
                this.pos.x += dir[0];
                this.pos.y += dir[1];
                maze[this.pos.y][this.pos.x].c = color(0,255,0);
            }
        }
    }
}