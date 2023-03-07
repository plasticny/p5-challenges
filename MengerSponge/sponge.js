class Sponge{
    constructor(box){
        this.boxes = [];
        this.boxes.push(box);
    }

    generate(){
        let newBoxes = [];

        for(let i = 0; i < this.boxes.length; i++){
            const Bx = this.boxes[i].pos.x;
            const By = this.boxes[i].pos.y;
            const Bz = this.boxes[i].pos.z;
            const r = this.boxes[i].r / 3;

            for(let x = -1; x < 2; x++){
                for(let y = -1; y < 2; y++){
                    for(let z = -1; z < 2; z++){
                        if(abs(x)+abs(y)+abs(z) > 1){
                            newBoxes.push(new Box(Bx+x*r, By+y*r, Bz+z*r, r));
                        }
                        
                    }
                }
            }
        }

        this.boxes = newBoxes;
    }
}