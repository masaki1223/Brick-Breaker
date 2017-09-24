function Ball(r){
    this.pos = createVector( width/2, height/2);
    this.dir = createVector(random(1),random(1));
    this.vel = createVector(1,1).mult(16);

    this.update = function(){
        this.pos.x += this.vel.x * this.dir.x;
        this.pos.y += this.vel.y * this.dir.y;
    }

    this.show = function(){
        fill(255);
        ellipse(this.pos.x, this.pos.y, r, r);
    }

    this.checkEdges = function(){
        if( this.pos.x > width -r ){
            this.dir.x*=-1;
        } else if( this.pos.x < r ){
            this.dir.x*=-1;                       
        } else if( this.pos.y < r ){
            this.dir.y *= -1;            
        }
    }

    this.meet = function(paddle){
        if( this.pos.x > paddle.pos.x - r &&
            this.pos.x < paddle.pos.x + paddle.w +r && 
            this.pos.y > paddle.pos.y -r/2 &&
            this.pos.y < paddle.pos.y){ 
            this.dir.y *= -1;
            //this.vel += 1.1;
        } 
    }
}
