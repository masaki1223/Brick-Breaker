var paddle; 
var ball;
var balls = [];
function setup(){
	createCanvas( windowWidth, windowHeight );	
	paddle = new Paddle();
	ball = new Ball(50);
	//frameRate(20);

	// for(var i =0; i< 550; i++){
	// 	balls.push(new Ball(50));
	// }
}

function draw(){
	background(0)		

	ball.show();
	ball.update();
	ball.checkEdges();
	ball.meet(paddle);
	paddle.show();
	paddle.update();
	paddle.checkEdges();
	
	// for(var i =0; i< 550; i++){
	// 	balls[i].show();
	// 	balls[i].update();
	// 	balls[i].checkEdges();
	// }
	//console.log(ball.pos);
	
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
