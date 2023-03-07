class Branch{
    static da = 0.2;
    static minLen = 5;

    constructor(len){
        this.len = len;
        this.branches = [];

        if(len > Branch.minLen){
            this.grow();
        }
    }

    grow(){
        let right_branch, left_branch;

        right_branch = new Branch(this.len/1.5);
        left_branch = new Branch(this.len/1.5);

        this.branches.push(right_branch);
        this.branches.push(left_branch);
    }

    draw(angle){
        rotate(angle);
        line(0,0,0,-this.len);
        translate(0,-this.len);
        for(let b of this.branches){
            push();
            this.branches[0].draw(angle+Branch.da);
            pop();
            push();
            this.branches[1].draw(angle-Branch.da);
            pop();
        }
    }
}