var Ship, ship_png;
var Sea, sea_png;


function preload()
{
ship_png = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
sea_png = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  Sea = createSprite(200,325,400,25);
  Sea.addImage("seaimage",sea_png);
  Sea.scale = 0.4;
  Sea.velocityX = -2

  Ship = createSprite(170,250,100,170);
  Ship.addAnimation("moving",ship_png);
  Ship.scale=0.4;
 
}

function draw() {
  background("blue");

 drawSprites();
}