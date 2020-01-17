var cheems;
var cx;
var cy;
function setup(){
	createCanvas(800, 800);
	
	var bg = loadImage('assets/stagebackground.png');
	
	var cheemsImg = loadImage('assets/cheems.png');
	cheems = createSprite(400, 400);
	cheems.addImage(cheemsImg);
}

function draw(){
	background(225, 225, 225);
	
	drawSprites();
	
	
	if(keyWentDown(UP_ARROW)){
		cheems.setVelocity(0, -5);
	}
	if(keyWentUp(UP_ARROW)){
		cheems.setVelocity(0, 0);
	}
	
	if(keyWentDown(DOWN_ARROW)){
		cheems.setVelocity(0, 5);
	}
	if(keyWentUp(DOWN_ARROW)){
		cheems.setVelocity(0, 0);
	}
	
	if(keyWentDown(LEFT_ARROW)){
		cheems.setVelocity(-5, 0);
	}
	if(keyWentUp(LEFT_ARROW)){
		cheems.setVelocity(0, 0);
	}
	
	if(keyWentDown(RIGHT_ARROW)){
		cheems.setVelocity(5, 0);
	}
	if(keyWentUp(RIGHT_ARROW)){
		cheems.setVelocity(0, 0);
	}
	

}