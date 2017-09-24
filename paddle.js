function Paddle(){
    this.w = 800;
    this.h = 20;
    this.pos = createVector( width/2 , height-60 );

    this.show = function(){
        fill(255);
        rect(this.pos.x, this.pos.y, this.w, this.h);
    }

  
    this.isMovingLeft = false;
    this.isMovingRight = false;

    this.move = function(step){
        this.pos.x += step;
    }

    this.update = function(){
        // this.pos.x = mouseX;
        // this.pos.y = mouseY;
        if(this.isMovingLeft == true){
            this.move(-20);
        } else if(this.isMovingRight == true){
            this.move(20);
        }
    }

    this.checkEdges = function(){
        if( this.pos.x < 0){
            this.pos.x = 0;
        } else if( this.pos.x+160 > width){
            this.pos.x = width-160;
        }
    }
   


}