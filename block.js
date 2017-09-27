function Block(){
    this.pos = createVector(random(100,width-100),random(100, height - 400));
    this.r = random(20, 80);
    this.total = 6;
    this.display = function(){
        push();
        fill(255, 255, 255, 200);
        translate(this.pos.x, this.pos.y);
        beginShape();
        for(var i = 0; i < this.total; i++){
            let angle = map(i,0,this.total,0,TWO_PI);
            var x = this.r * cos(angle);
            var y = this.r * sin(angle);
            vertex(x,y);
        }
        endShape(CLOSE);
        pop();

        // fill(255,255,255,200);
        // ellipse( this.pos.x, this.pos.y , this.r, this.r);
        // //console.log(ball.pos.x + ball.r - this.pos.x + this.r);
    }
    // this.hits = function(ball){
    //     var d = dist(ball.pos.x + ball.r, ball.pos.y + ball.r, this.pos.x + this.r, this.pos.y + this.r);
    //     console.log(d);
    //     if( d < 1){
            
    //         return true;
    //     }
    // }
}