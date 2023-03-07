class Particle{
    constructor(){
        this.fov = 45
        this.pos = createVector(width/4, height /2);
        this.rays = [];
        this.heading = 0;

        for(let a = -this.fov/2; a < this.fov/2; a += 0.5){
            this.rays.push(new Ray(this.pos, radians(a)));
        }
    }

    updateFOV(fov){
        this.fov = fov;

        this.rays = [];
        for(let a = -this.fov/2; a < this.fov/2; a += 0.5){
            this.rays.push(new Ray(this.pos, radians(a)+this.heading));
        }
    }

    move(amt){
        const vel = p5.Vector.fromAngle(this.heading);
        vel.setMag(amt);
        this.pos.add(vel);
    }

    rotate(angle){
        this.heading += angle;
        let index = 0;
        for(let a = -this.fov/2; a < this.fov/2; a += 0.5){
            this.rays[index].setAngle(radians(a) + this.heading);
            index++;
        }
    }

    update(x, y){
        this.pos.set(x,y);
    }

    look(walls){
        const scene = [];

        for(let ray of this.rays){
            let closest = null;
            let record = Infinity;
            for(let wall of walls){
                const pt = ray.cast(wall);
                if(pt){
                    let d = p5.Vector.dist(this.pos, pt);
                    const a = ray.dir.heading() - this.heading;
                    if(!mouseIsPressed){
                        d *= cos(a);
                    }
                    
                    if(d < record){
                        record = d;
                        closest = pt;
                    }
                }
            }

            if(closest){
                stroke(255, 100);
                line(this.pos.x, this.pos.y, closest.x, closest.y);
            }

            scene.push(record);
        }

        return scene;
    }

    show(){
        fill(255);
        ellipse(this.pos.x, this.pos.y, 4);

        for(let ray of this.rays){
            ray.show();
        }
    }
}