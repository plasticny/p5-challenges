class Alien{
    static minX; static maxX;
    static minY; static maxY;
    static speed = 2;

    constructor(x,y){
        this.x = x;
        this.y = y;

        this.r = 30;

        this.dir = 1;

        this.R = random(100,200);
        this.G = random(10,50);
        this.B = random(10,50);

        Alien.maxX = max(x, Alien.maxX);
        Alien.minX = min(x, Alien.minX);
        Alien.maxY = max(y, Alien.maxY);
        Alien.minY = min(y, Alien.minY);
    }

    changeDir(){
        this.dir *= -1;
        this.x += 15*this.dir;
        this.y += 30;
    }

    move(){
        Alien.speed = map(aliens.length, 21, 1, 2, 4);

        this.x += Alien.speed*this.dir;

        Alien.maxX = max(this.x, Alien.maxX);
        Alien.minX = min(this.x, Alien.minX);
        Alien.maxY = max(this.y, Alien.maxY);
        Alien.minY = min(this.y, Alien.minY);
    }

    show(){
        push();
        fill(this.R, this.G, this.B);
        ellipse(this.x, this.y, this.r);
        pop();
    }
}