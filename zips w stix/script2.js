var playerOne;
var playerTwo;
var GRAVITY = 0.3;

var STAGE_BOTTOM;
var STAGE_LEFT;
var STAGE_RIGHT;

function setup(){
	createCanvas(800, 800);
	
	var bg = loadImage('assets/stagebackground.png');
	
	//stage
	STAGE_BOTTOM = createSprite(400, 600, 700, 50);
	STAGE_LEFT = createSprite(200, 300, 100, 50);
	STAGE_RIGHT = createSprite(600, 300, 100, 50);
	//playerOne
	var playerOneImg = loadImage('assets/player_One.png');
	playerOne = createSprite(400, 400);
	playerOne.addImage(playerOneImg);
	
	//bruh cat
	var bruhImg = loadImage('assets/player_Two.png');
	playerTwo = createSprite(200, 400);
	playerTwo.addImage(bruhImg);
	
	
}

function draw(){
	background(225, 225, 225);
	
	drawSprites();
	
	//collisions
	//playerOne
	playerOne.collide(STAGE_BOTTOM);
	playerOne.collide(STAGE_RIGHT);
	playerOne.collide(STAGE_LEFT);
	
	playerTwo.collide(STAGE_BOTTOM);
	playerTwo.collide(STAGE_RIGHT);
	playerTwo.collide(STAGE_LEFT);
	
	
	//playerOne contorls
		//gravity
		playerOne.velocity.y += GRAVITY;
		
		//up
		if(keyWentDown(UP_ARROW)){
			playerOne.velocity.y = -5;
		}

		
		//down
		if(keyWentDown(DOWN_ARROW)){
			playerOne.velocity.y = 5;
		}

		
		//left
		if(keyWentDown(LEFT_ARROW)){
			playerOne.velocity.x = -5;
			playerOne.mirrorX(-1);
		}
		if(keyWentUp(LEFT_ARROW)){
			playerOne.velocity.x = 0;
		}
		
		//right
		if(keyWentDown(RIGHT_ARROW)){
			playerOne.velocity.x = 5;
			playerOne.mirrorX(1);
		}
		if(keyWentUp(RIGHT_ARROW)){
			playerOne.velocity.x = 0;
		}
		
	//bruh cat gravity
		//gravity
		playerTwo.velocity.y += GRAVITY;
		
		//up
		if(keyWentDown('w')){
			playerTwo.velocity.y = -5;
		}

		
		//down
		if(keyWentDown('s')){
			playerTwo.velocity.y = 5;
		}

		
		//left
		if(keyWentDown('a')){
			playerTwo.velocity.x = -5;
			playerTwo.mirrorX(-1);
		}
		if(keyWentUp('a')){
			playerTwo.velocity.x = 0;
		}
		
		//right
		if(keyWentDown('d')){
			playerTwo.velocity.x = 5;
			playerTwo.mirrorX(1);
		}
		if(keyWentUp('d')){
			playerTwo.velocity.x = 0;
		}
	

}