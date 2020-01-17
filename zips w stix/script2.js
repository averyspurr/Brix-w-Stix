var cheems;
var bruhCat;
var GRAVITY = 0.3;

var STAGE_BOTTOM;
var STAGE_LEFT;
var STAGE_RIGHT;

function setup(){
	createCanvas(800, 800);
	
	var bg = loadImage('assets/stagebackground.png');
	
	//stage
	STAGE_BOTTOM = createSprite(400, 600, 700, 50);
	//cheems
	var cheemsImg = loadImage('assets/cheems.png');
	cheems = createSprite(400, 400);
	cheems.addImage(cheemsImg);
	
	//bruh cat
	var bruhImg = loadImage('assets/bruhcat.png');
	bruhCat = createSprite(200, 400);
	bruhCat.addImage(bruhImg);
	
	
}

function draw(){
	background(225, 225, 225);
	
	drawSprites();
	
	//cheems contorls
		//gravity
		cheems.velocity.y += GRAVITY;
		
		//up
		if(keyWentDown(UP_ARROW)){
			cheems.velocity.y = -5;
		}

		
		//down
		if(keyWentDown(DOWN_ARROW)){
			cheems.velocity.y = 5;
		}

		
		//left
		if(keyWentDown(LEFT_ARROW)){
			cheems.velocity.x = -5;
			cheems.mirrorX(-1);
		}
		if(keyWentUp(LEFT_ARROW)){
			cheems.velocity.x = 0;
		}
		
		//right
		if(keyWentDown(RIGHT_ARROW)){
			cheems.velocity.x = 5;
			cheems.mirrorX(1);
		}
		if(keyWentUp(RIGHT_ARROW)){
			cheems.velocity.x = 0;
		}
		
	//bruh cat gravity
		//gravity
		bruhCat.velocity.y += GRAVITY;
		
		//up
		if(keyWentDown('w')){
			bruhCat.velocity.y = -5;
		}

		
		//down
		if(keyWentDown('s')){
			bruhCat.velocity.y = 5;
		}

		
		//left
		if(keyWentDown('a')){
			bruhCat.velocity.x = -5;
			bruhCat.mirrorX(-1);
		}
		if(keyWentUp('a')){
			bruhCat.velocity.x = 0;
		}
		
		//right
		if(keyWentDown('d')){
			bruhCat.velocity.x = 5;
			bruhCat.mirrorX(1);
		}
		if(keyWentUp('d')){
			bruhCat.velocity.x = 0;
		}
	

}