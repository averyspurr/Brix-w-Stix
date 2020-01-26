var bg;
var lastMovement;
var playerOne;
var stix1;
var hitOne;
var sOffOne = -42;
var cOffOne = 23;
var GRAVITY = 0.3;
var blueWins = 0;
var vicroyblue;
var vicroyorange;

var playerTwo;
var stix2;
var hitTwo;
var sOffTwo = 42;
var cOffTwo = -23;
var GRAVITY2 = 0.3;
var orWins = 0;

var STAGE_BOTTOM;
var STAGE_LEFT;
var STAGE_RIGHT;



function setup(){
	createCanvas(800, 800);
	
	
	// bg = loadImage('assets/stagebackground.png');
	
		var bgImg = loadImage('assets/stagebackground.png');
		bg = createSprite(400, 400);
		bg.addImage(bgImg);
		
		
	 createCanvas(800, 800);
	
	//groups
		stage = new Group();
		players = new Group();
		stix = new Group();
		stage0G = new Group();
	
	//stage
		STAGE_BOTTOM = createSprite(400, 600, 700, 50);
		stage.add(STAGE_BOTTOM);
		
		STAGE_LEFT = createSprite(200, 300, 100, 50);
		stage.add(STAGE_LEFT);
		
		STAGE_RIGHT = createSprite(600, 300, 100, 50);
		stage.add(STAGE_RIGHT);
		
		STAGE_Top = createSprite(400, 0, 1000, 1);
		stage0G.add(STAGE_Top);
		
		
	
	//playerOne
		var playerOneImg = loadImage('assets/player_One.png');
		playerOne = createSprite(600, 400);
		playerOne.addImage(playerOneImg);
		players.add(playerOne);
	
	//back hit boxes
		//one
		hitOne = createSprite(600, 400, 0, 0);
		
		//two
		hitTwo = createSprite(200, 400, 0, 0);

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
	
				//Player One Wraping 
			console.log(playerOne.position);
			if(playerOne.position.x < 0){
				playerOne.position.x =799;			
			} else {
				if(playerOne.position.x > 800){
					playerOne.position.x =1;			
				}
			}
			
			
			//Player Two Wraping 
						if(playerTwo.position.x < 0){
				playerTwo.position.x =799;			
			} else {
				if(playerTwo.position.x > 800){
					playerTwo.position.x =1;			
				}
			}
	
	drawSprites();
	
	//collisions
	//playerOne
			playerOne.collide(stage);
			playerOne.collide(stage0G);
			//playerOne.displace(playerTwo);
			hitOne.setCollider("rectangle", cOffOne, 5, 2, 70);
			
	//playerTwo
			playerTwo.collide(stage);
			playerTwo.collide(stage0G);
			//playerTwo.displace(playerOne);
			hitTwo.setCollider("rectangle", cOffTwo, 10, 2, 70);
			
		
		
		
		
		//sprite tracking
		//backs
			//one
			hitOne.position =  playerOne.position;
			//two
			hitTwo.position = playerTwo.position;
	//stix
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
			lastMovement = 1;
			
		}

		
		//down
		if(keyWentDown(DOWN_ARROW)){
			playerOne.velocity.y = 5;
			lastMovement = 1;
			
		}

		
		//left
		if(keyWentDown(LEFT_ARROW)){
			playerOne.velocity.x += -5;
			playerOne.mirrorX(-1);
			sOffOne = (-42);
			cOffOne = (23);
			lastMovement = 1;
		}
		if(keyWentUp(LEFT_ARROW)){
			playerOne.velocity.x -= -5;
			lastMovement = 1;
		}
		
		//right
		if(keyWentDown(RIGHT_ARROW)){
			playerOne.velocity.x += 5;
			playerOne.mirrorX(1);
			sOffOne = (42);
			cOffOne = (-23);
			lastMovement = 1;
			console.log(playerOne.position.x);
		}
		if(keyWentUp(RIGHT_ARROW)){
			playerOne.velocity.x -= 5;
			lastMovement = 1;
		}
		
	//playerTwo controls
		//gravity
		playerTwo.velocity.y += GRAVITY2;
		
		//up
		if(keyWentDown('w')){
			playerTwo.velocity.y = -5;
			lastMovement = 2;
			
		}

		
		//down
		if(keyWentDown('s')){
			playerTwo.velocity.y = 5;
			lastMovement = 2;
			
		}

		
		//left
		if(keyWentDown('a')){
			playerTwo.velocity.x += -5;
			playerTwo.mirrorX(-1);
			sOffTwo = (-42);
			cOffTwo = (23);
			
			lastMovement = 2;
		}
		if(keyWentUp('a')){
			playerTwo.velocity.x -= -5;
			lastMovement = 2;
		}
		
		//right
		if(keyWentDown('d')){
			playerTwo.velocity.x += 5;
			playerTwo.mirrorX(1);
			sOffTwo = (42);
			cOffTwo = (-23);
			lastMovement = 2;
		}
		if(keyWentUp('d')){
			playerTwo.velocity.x -= 5;
			lastMovement = 2;
		}
	
		//perishing
		//If player one moved last, then player two loses
		if(lastMovement == 1){
			if(stix1.overlap(hitTwo)){
				playerTwo.remove();
				stix2.remove()
				
			}
		}else{
			if(stix2.overlap(hitOne)){
				playerOne.remove();
				stix1.remove()
			}
		}
		
		if(playerOne.position.y >= 800){
			playerOne.remove();
			stix1.remove();
		}
		
			if(playerTwo.position.y >= 800){
			playerTwo.remove();
			stix2.remove();
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