var playerOne;
var playerTwo;
var GRAVITY = 0.3;
var GRAVITY2 = 0.3;

var STAGE_BOTTOM;
var STAGE_LEFT;
var STAGE_RIGHT;



function setup(){
	createCanvas(800, 800);
	
	var bg = loadImage('assets/stagebackground.png');
	//groups
	stage = new Group();
	players = new Group();
	
	//stage
	STAGE_BOTTOM = createSprite(400, 600, 700, 50);
	stage.add(STAGE_BOTTOM);
	
	STAGE_LEFT = createSprite(200, 300, 100, 50);
	stage.add(STAGE_LEFT);
	
	STAGE_RIGHT = createSprite(600, 300, 100, 50);
	stage.add(STAGE_RIGHT);
	
	//playerOne
	var playerOneImg = loadImage('assets/player_One.png');
	playerOne = createSprite(600, 400);
	playerOne.addImage(playerOneImg);
	players.add(playerOne);
	
	//playerTwo
	var bruhImg = loadImage('assets/player_Two.png');
	playerTwo = createSprite(200, 400);
	playerTwo.addImage(bruhImg);
	players.add(playerTwo);
	
}

function draw(){
	background(225, 225, 225);
	
	drawSprites();
	
	//collisions
	//playerOne
	playerOne.collide(stage);
	playerOne.displace(playerTwo);
	
	//playerTwo
	playerTwo.collide(stage);
	playerTwo.displace(playerOne);
	
	
	
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
			playerOne.velocity.x += -5;
			playerOne.mirrorX(-1);
		}
		if(keyWentUp(LEFT_ARROW)){
			playerOne.velocity.x -= -5;
		}
		
		//right
		if(keyWentDown(RIGHT_ARROW)){
			playerOne.velocity.x += 5;
			playerOne.mirrorX(1);
		}
		if(keyWentUp(RIGHT_ARROW)){
			playerOne.velocity.x -= 5;
		}
		
	//playerTwo gravity
		//gravity
		playerTwo.velocity.y += GRAVITY2;
		
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
			playerTwo.velocity.x += -5;
			playerTwo.mirrorX(-1);
		}
		if(keyWentUp('a')){
			playerTwo.velocity.x -= -5;
		}
		
		//right
		if(keyWentDown('d')){
			playerTwo.velocity.x += 5;
			playerTwo.mirrorX(1);
		}
		if(keyWentUp('d')){
			playerTwo.velocity.x -= 5;
		}
	
	
		//gravity & collision fixes
		if(playerOne.overlap(stage) || playerOne.overlap(players)){
			GRAVITY = 0;
		}else{
			GRAVITY = 0.3;
		}
		
		if(playerTwo.overlap(stage) || playerTwo.overlap(players)){
			GRAVITY2 = 0;
		}else{
			GRAVITY2 = 0.3;
		}
	
}