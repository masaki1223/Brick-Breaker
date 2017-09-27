function Ball(){
    this.pos = createVector( width/2, height/2);
    this.dir = createVector(random(-1,1),random(-1,1));
    this.vel = createVector(1,1).mult(20);
    this.r = 50;
    this.update = function(){
        this.pos.x += this.vel.x * this.dir.x;
        this.pos.y += this.vel.y * this.dir.y;
    }

    this.show = function(){
        push();
        fill(255,200,100);
        noStroke();
        ellipse(this.pos.x, this.pos.y, this.r, this.r);
        pop();
    }

    this.checkEdges = function(){
        if( this.pos.x > width -this.r ){
            this.dir.x*=-1;
        } else if( this.pos.x < this.r ){
            this.dir.x*=-1;                       
        } else if( this.pos.y < this.r ){
            this.dir.y *= -1;            
        }
    }

    this.meet = function(paddle){
        if( this.pos.x > paddle.pos.x - this.r &&
            this.pos.x < paddle.pos.x + paddle.w +this.r && 
            this.pos.y > paddle.pos.y -this.r/2 &&
            this.pos.y < paddle.pos.y){ 
            this.dir.y *= -1;
            //this.vel += 1.1;
        } 
    }
    this.hits = function(block){
        var d = dist(this.pos.x, this.pos.y, block.pos.x, block.pos.y);
        if( d < this.r + block.r ){
            return true;
        }
    }
}
