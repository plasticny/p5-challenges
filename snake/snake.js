class Snake{
    constructor(head){
        this.body = [];
        this.body.push(head);

        this.head = head;
        
        this.tail = new Body(this.head.x-1, this.head.y, 10);

        this.speed = 20;
        
        this.dirX = 1;
        this.dirY = 0;
    }

    stop(){
        this.speed = 0;
    }

    resume(){
        this.speed = 20;
    }

    dir(x,y){
        if(!(this.dirX == -x && this.dirY == -y)){
            this.dirX = x;
            this.dirY = y;
        }
        
    }

    move(){
        let body = this.body;
        let head = this.head;
        let tail = this.tail;

        tail.x = body[body.length-1].x;
        tail.y = body[body.length-1].y;

        for(let i = body.length - 1; i >= 0; i--){
            if(body[i] == head){
                if(head.move(this.dirX, this.dirY, this.speed)){
                    this.respawn();
                    return true;
                }

                for(let j = 1; j < body.length-1; j++){
                    if(head.x == body[j].x && head.y == body[j].y){
                        this.respawn();
                        return true;
                    }
                }
            }else{
                body[i].follow(body[i-1]);
            }
        }
    }

    respawn(){
        let newBody = [];
        let head = this.head;

        newBody.push(head);
        this.body = newBody;

        head.x = 120;
        head.y = 120;

        this.dirX = 1;
        this.dirY = 0;
    }

    show(){
        let body = this.body;

        for(let i = 0; i < body.length; i++){
            body[i].show();
        }
    }

    eat(food){
        let head = this.head;
        let scl = this.speed;

        if(head.x == food.x && head.y == food.y){
            let tail = this.tail;

            this.body.push(new Body(tail.x, tail.y, head.r));
            return true;
        }
    }
}