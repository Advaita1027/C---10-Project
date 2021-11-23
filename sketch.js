var sea , seaImg
var ship , shipImg

function preload(){
 seaImg = loadImage("sea.png")
 shipImg = loadAnimation("ship-1.png","ship-2.png")

}

function setup(){
  createCanvas(400,400);
  sea = createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -4;
  sea.scale = 0.3;

  ship = createSprite(250,250);
  ship.addAnimation("movingShip",shipImg);
  ship.scale = 0.3;

}

function draw() {
  background("blue");
  sea.velocityX = -4;
  
  if(sea.x < 0){
    sea.x = sea.width/8;
  }

  drawSprites();
 
}