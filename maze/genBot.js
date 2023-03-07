class GenBot{
    constructor(x,y){
        this.pos = createVector(x,y);
        this.counter = 0;
        this.memory = [];
        this.mIndex;

        this.start = maze[y][x];
        this.start.walls[0] = 0;
        this.start.c = color(0,0,255);

        this.end = maze[COUNT_SIDE-1][x];
        this.end.walls[3] = 0;
        this.end.c = color(0,0,255);
    }

    visit(cell){
        if(!cell.visited){
            cell.visited = true;
            this.memory.push(cell.pos);
            this.counter++;
        }
    }

    breakWall(cell, dir){
        switch(dir){
            case UP:
                cell.walls[0] = 0;
                maze[cell.pos.y-1][cell.pos.x].walls[3] = 0;
                break;
            case LEFT:
                cell.walls[1] = 0;
                maze[cell.pos.y][cell.pos.x-1].walls[2] = 0;
                break;
            case RIGHT:
                cell.walls[2] = 0;
                maze[cell.pos.y][cell.pos.x+1].walls[1] = 0;
                break;
            case DOWN:
                cell.walls[3] = 0;
                maze[cell.pos.y+1][cell.pos.x].walls[0] = 0
                break;
        }
    }

    move(){
        let dx, dy, dir;
        let movable =[UP,DOWN,LEFT,RIGHT];
        let x = this.pos.x, y = this.pos.y;
        let next = null;
        let memory = this.memory;

        //visit & remember cell
        this.visit(maze[y][x]);

        if(random(0,1) > 0.2 && this.memory.length != 0)//randomly make a dead end
        {
            do{
                dir = round(random(0,movable.length-1));
    
                dx = movable[dir][0];
                dy = movable[dir][1];

                //wrong direction
                if(
                    (x+dx < 0 || x+dx >= COUNT_SIDE) ||
                    (y+dy < 0 || y+dy >= COUNT_SIDE) ||
                    maze[y+dy][x+dx].visited
                ){
                    //delete direction
                    movable.splice(dir,1);
                }else{
                    next = maze[y+dy][x+dx].pos;
                    break;
                }

            }while(movable.length != 0);
        }

        //dead end case
        if(next == null){
            memory.splice(this.mIndex, 1);
            this.mIndex = floor(random(memory.length-1))
            next = memory[this.mIndex];
        }else{
            this.breakWall(maze[y][x], movable[dir]);
            this.mIndex = memory.length-1;
        }

        if(next == null){
            this.counter = COUNT_SIDE*COUNT_SIDE;
        }else{
            this.pos = next;
        }
    }
}