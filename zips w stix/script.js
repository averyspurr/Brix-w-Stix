var players;
var playerTwo;
var stix1;
var stix2;
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
	
	//players
	var playersImg = loadImage('assets/player_One.png');
	players = createSprite(600, 400);
	players.addImage(playersImg);
	players.add(players);

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
	
	
	
}

function draw(){
	background(225, 225, 225);
	
	drawSprites();
	
	//collisions
	//players
	players.collide(stage);
	players.displace(playerTwo);
	
	//playerTwo
	playerTwo.collide(stage);
	playerTwo.displace(players);
	
	
	
	//players contorls
		//gravity
		players.velocity.y += GRAVITY;
		
		//up
		if(keyWentDown(UP_ARROW)){
			players.velocity.y = -5;
		}

		
		//down
		if(keyWentDown(DOWN_ARROW)){
			players.velocity.y = 5;
		}

		
		//left
		if(keyWentDown(LEFT_ARROW)){
			players.velocity.x += -5;
			players.mirrorX(-1);
		}
		if(keyWentUp(LEFT_ARROW)){
			players.velocity.x -= -5;
		}
		
		//right
		if(keyWentDown(RIGHT_ARROW)){
			players.velocity.x += 5;
			players.mirrorX(1);
		}
		if(keyWentUp(RIGHT_ARROW)){
			players.velocity.x -= 5;
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
		if(players.overlap(stage) || players.overlap(players)){
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