class Body{
    constructor(x, y, r){
        this.x = x;
        this.y = y;
        this.r = r;
    }

    move(dirX, dirY, speed){
        let r = this.r;

        this.x += dirX * speed;
        this.y += dirY * speed;

        return this.x > width-r || this.x < 0 || this.y > height-r || this.y < 0;
    }

    follow(body){
        this.x = body.x;
        this.y = body.y;
    }

    show(){
        rect(this.x, this.y, this.r);
    }
}