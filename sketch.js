
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  foodImg = loadImage("banana.png");
  obstacleImg = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(700,700)
  
ground = createSprite(500,650,1500,20)
ground.velocityX = -5
  ground.x = ground.width/2
    monkey = createSprite(10,570,30,30)
  monkey.addAnimation("running", monkey_running)
  monkey.scale = 0.2
  
  obstacleGroup = createGroup()
  foodGroup = createGroup()
  
  
  
  
  
  
  
  
}








function draw() {
 
  background("lightgreen")
  
  if(ground.x<0){
     ground.x = ground.width/2
    
     }
   
  if(keyDown("space")){
     monkey.velocityY = -10
     }
  monkey.velocityY = monkey.velocityY + 0.8
  obstacle();
  
  monkey.collide(ground)
  
  food()
  
  if(monkey.isTouching(foodGroup)){
     foodGroup.destroyEach()
    score = score + 1
     }
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time:  "+ survivalTime, 100,50);
  
  drawSprites()
  
  
  
}

function obstacle(){
  if(frameCount%200===0){
    stone = createSprite(700,600,20,20);
    stone.addImage("moving",obstacleImg);
    stone.scale = 0.3;
    //stone.y = Math.round(random(100,700));
    stone.velocityX = -5
    stone.setLifeTime = 50;
    
    obstacleGroup.add(stone)
  }
}

function food(){
  if(frameCount%150===0){
    banana = createSprite(700,600,20,20);
    banana.addImage("moving",foodImg);
    banana.scale = 0.1
    banana.y = Math.round(random(100,700));
    banana.velocityX = -5
    banana.setLifeTime = 50;
    
    foodGroup.add(banana)
  }
}




