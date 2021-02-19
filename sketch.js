var soilder; 
var soilderImage,groundImage;
var invisibleGround;
var ground;
var PLAY= 1;
var END = 0;
var gameState=PLAY;
var score=0;

var gameOverImage,restartImage;
var gameOver,restart;
var reset;




function preload() {
   
  soilderImage = loadImage("image-1.png");
  groundImage = loadImage("ground2.png");
  restartImage = loadImage(" restart.png");
 gameOverImage = loadImage("gameOver.png");

}
  function setup(){
    createCanvas(1200,800);
    soilder= createSprite(40, 800,40,10);
    soilder.addImage("soldier",soilderImage);
     soilder.scale=0.5;

     ground = createSprite(200,750,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,800,400,10);
  invisibleGround.visible = false;

  score = 0;
  gameOver = createSprite(300,70,10,10);
  gameOver.addImage(gameOverImage);
  
  restart = createSprite(300,200,10,10);
  restart.addImage(restartImage);
  
  gameOver.visible=true;
  restart.visible=true;
    
  }
  
function draw(){
//soilder.debug=true;
camera.x=soilder.x;
gameOver . position.x=restart.position.x=camera.x




text("Score: "+ score, 500,50);




  background("white");
  
  if (keyDown("space")) {
    soilder.velocityY=-7;
  }
  soilder.velocityY=soilder.velocityY+0.8;

  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  soilder.collide(invisibleGround);
 
  if(gameState ===PLAY){
    score = score + Math.round(getFrameRate()/60);  
  }
    

  soilder.collide(ground);
  if(gameState===END){
    gameOver.visible=true;
  restart.visible=true;
 
  ground.velocityX = 0;
  soilder.velocityY = 0;}
    
  if(mousePressedOver(restart)) {
    reset();
  }
  
 
  drawSprites();
  
  
}







