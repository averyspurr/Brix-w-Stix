var playerOne;
var playerTwo;
var stix1;
var sOffOne = -42;
var cOffOne;
var stix2;
var sOffTwo = 42;
var cOffTwo;
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
	stix = new Group();
	
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

	//stix1
	var stixImg = loadImage('assets/stix.png');
	stix1 = createSprite(600, 400);
	stix1.addImage(stixImg);
	stix.add(stix1);
	
	//playerTwo
	var bruhImg = loadImage('assets/player_Two.png');
	playerTwo = createSprite(200, 400);
	playerTwo.addImage(bruhImg);
	players.add(playerTwo);
	
	//stix2
	var stixImg = loadImage('assets/stix.png');
	stix2 = createSprite(200, 400);
	stix2.addImage(stixImg);
	stix.add(stix2);
	
	
	
}

function draw(){
	background(225, 225, 225);
	
	drawSprites();
	
	//collisions
	//playerOne
	playerOne.collide(stage);
	playerOne.displace(playerTwo);
	stix1.setCollider("rectangle", cOffOne, 5, 2, 70);
	stix1.debug = true;
	
	//playerTwo
	playerTwo.collide(stage);
	playerTwo.displace(playerOne);
	stix2.setCollider("rectangle", cOffTwo, 10, 2, 70);
	stix2.debug = true;
	
	
	//stix tracking
	//playerOne
	stix1.position.x = playerOne.position.x + sOffOne;
	stix1.position.y = playerOne.position.y;
	
	//playerTwo
	stix2.position.x = playerTwo.position.x + sOffTwo;
	stix2.position.y = playerTwo.position.y;
	
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
			sOffOne = (-42);
		}
		if(keyWentUp(LEFT_ARROW)){
			playerOne.velocity.x -= -5;
		}
		
		//right
		if(keyWentDown(RIGHT_ARROW)){
			playerOne.velocity.x += 5;
			playerOne.mirrorX(1);
			sOffOne = (42);
		}
		if(keyWentUp(RIGHT_ARROW)){
			playerOne.velocity.x -= 5;
		}
		
	//playerTwo controls
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
			sOffTwo = (-42);
		}
		if(keyWentUp('a')){
			playerTwo.velocity.x -= -5;
		}
		
		//right
		if(keyWentDown('d')){
			playerTwo.velocity.x += 5;
			playerTwo.mirrorX(1);
			sOffTwo = (42);
		}
		if(keyWentUp('d')){
			playerTwo.velocity.x -= 5;
		}
	
	
		//gravity & collision fixes
		if(playerOne.overlap(stage)){
			GRAVITY = 0;
		}else{
			GRAVITY = 0.3;
		}
		
		if(playerTwo.overlap(stage)){
			GRAVITY2 = 0;
		}else{
			GRAVITY2 = 0.3;
		}
	
}