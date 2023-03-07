class Planet{
    constructor(r,a,d,o){
        this.radius = r;
        this.angle = a;
        this.distance = d;

        this.orbit = o;

        this.planets = [];
    }

    hasPlanet(newP){
        newP.distance += this.radius;
        this.planets.push(newP);
    }

    move(){
        this.angle += this.orbit;

        for(let planet of this.planets){
            planet.move();
        }
    }

    show(){
        push();
        fill(255);
        rotate(this.angle);
        translate(this.distance, 0);
        ellipse(0,0,this.radius);

        for(let planet of this.planets){
            planet.show();
        }
        
        pop();
    }
}