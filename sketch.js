var paddle; 
var ball;
var balls = [];
var blocks = [];
function setup(){
	createCanvas( windowWidth, windowHeight );	
	paddle = new Paddle();
	ball = new Ball(50);
	
	for(var i = 0; i<0; i++){
		balls.push(new Block());
	}

	for(var i = 0; i<15; i++){
		blocks.push(new Block());
	}
}

function draw(){
	background(0)		
	ball.show();
	ball.update();
	ball.checkEdges();
	ball.meet(paddle);

	paddle.show();
	paddle.update();
	paddle.checkEdges();;

	for(var j = 0; j<15; j++){	
		if(ball.hits(blocks[j])){
			blocks.splice(j,1);
		}
		blocks[j].display();
	}
}
			

function keyPressed(){
    if(keyCode === LEFT_ARROW){
		paddle.isMovingLeft = true;
    } else if(keyCode === RIGHT_ARROW){
		paddle.isMovingRight = true;
    } 
}

function keyReleased(){
	paddle.isMovingLeft = false; 
	paddle.isMovingRight = false;
}
