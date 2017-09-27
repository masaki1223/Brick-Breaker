var paddle; 
var ball;
var blocks = [];
var youWin = false;
var playingGame = false;

function setup(){
	createCanvas( windowWidth, windowHeight );	
	paddle = new Paddle();
	ball = new Ball(50);
	

	for(var i = 0; i<20; i++){
		blocks.push(new Block());
	}
	windowText();
}

function draw(){
	background(255)		
	ball.show();
	if(playingGame === true ) ball.update();
	if(playingGame === true ) ball.checkEdges();
	ball.meet(paddle);

	paddle.show();
	paddle.update();
	if(playingGame === true ) paddle.checkEdges();;
	
	for(var j = 0; j<blocks.length; j++){	
		if(ball.hits(blocks[j])){
			if(blocks[j].r > 40){
				blocks[j].r /= 2;
			} else if(blocks[j].r < 40){
				blocks.splice(j,1);
			}
			ball.dir.y *= -1;
		}
		if(blocks.length == 0){
			break;
		}
		blocks[j].display();
		
	}

	if(ball.pos.y > height){
		//console.log("Your score:" + 20-blocks.length);
		playingGame = false;
		ball.pos = createVector(width/2, height/2);
		}
	if(blocks.length == 0 ){
		youWin = true;
		playingGame = false;
	}
	if(youWin){
		winText.style('display', 'block');
	} else {
		winText.style('display', 'none');
	}
}



function keyPressed(){
    if(keyCode === LEFT_ARROW){
		paddle.isMovingLeft = true;
    } else if(keyCode === RIGHT_ARROW){
		paddle.isMovingRight = true;
    } else if (key === ' '){
		playingGame = true;
		youWin = false;
	}
}


function keyReleased(){
	paddle.isMovingLeft = false; 
	paddle.isMovingRight = false;
}

function windowText(){
	winText = createP("You win!!!!");
	console.log(winText);
	winText.position(width/2,100);
}