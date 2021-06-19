//var sea
var ship,ship_moving
function preload(){

  ship_moving=loadAnimation("ship-1.png,ship-2.png,ship-3.png,ship-4.png,");
  sea=loadImage("sea.png");

}

function setup(){
  createCanvas(400,400);
  ship=createSprite(50,40,100,10)
  ship.addAnimation("moving,ship_moving")
  scene.addImage(sea);
  scene.x=scene.width/2;
  

}

function draw() {
  background("blue");
 
}