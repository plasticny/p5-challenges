class LSystem{
    static start = 'F';
    static rule = {original: 'F', next: 'FF+[+F-F-F]-[-F+F+F]'};

    constructor(){
        this.sentence = LSystem.start;
    }

    generate(){
        let nextSentence = "";
        for(let o of this.sentence){
            if(o == LSystem.rule.original){
                nextSentence += LSystem.rule.next;
            }
            else{
                nextSentence += o;
            }
        }
        this.sentence = nextSentence;
        return this.sentence;
    }
}