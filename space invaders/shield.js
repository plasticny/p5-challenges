class Shield{
    static h = 15;

    constructor(x, y){
        this.x = x;
        this.y = y;

        this.shape = [
            [0,1,1,0],
            [1,1,1,1],
            [1,1,1,1],
            [1,0,0,1]
        ];
    }

    broken(){
        for(let dy = 0; dy < 4; dy++){
            for(let dx = 0; dx < 4; dx++){
                if(this.shape[dy][dx]){
                    this.shape[dy][dx] = 0;
                    return;
                }
            }
        }
    }

    show(){
        const x = this.x, y = this.y;

        push();
        translate(x,y);
        fill(255);
        rectMode(CENTER);

        for(let dy = 0; dy < 4; dy++){
            for(let dx = 0; dx < 4; dx++){
                if(this.shape[dy][dx]){
                    rect(
                        (dx-2)*Shield.h,
                        (dy-2)*Shield.h,
                        Shield.h,Shield.h
                    )
                }
            }
        }
        pop();
    }
}