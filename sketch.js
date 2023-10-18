 var backgroundImg
var basketball, basketballImg
var hoops, hoopsImage, hoopsGroup
var cloudsImage, clouds, cloudGroup
var score=0
var gamestate = "start"
function preload (){
backgroundImg=loadImage("assets/sky background.jpg")
basketballImg=loadImage("assets/basketball.png")
hoopsImage=loadImage("assets/ring.png")
cloudsImage=loadImage("assets/clouds.png")
}



function setup() {
  createCanvas(windowWidth,windowHeight);
  basketball=createSprite(100, 250, 50, 50);
basketball.addImage("ball",basketballImg)
basketball.scale= 0.4

cloudsGroup= createGroup()

hoopsGroup= createGroup()

}

function draw() {
  background(backgroundImg); 
  textSize(30)
  text("Score: "+ score, 500,50);
  if (keyDown(UP_ARROW)) {
    gamestate="play"
  }
if (gamestate=="play") {
  if (keyDown("space")) {
    basketball.velocityY= -10
  
  }
  
  basketball.velocityY = basketball.velocityY + 0.8
}

basketball.overlap(hoopsGroup,(ball,hoop)=>{
score=score+1
hoop.remove ()
})

  spawnHoops() 
  spawnClouds();
  drawSprites();

}

function spawnHoops() {
  if (frameCount %110 == 0) {
    hoops = createSprite(width, random(400,600), 20, 30)
  hoops.addImage(hoopsImage);
  hoops.scale= 0.5
  hoops.velocityX = -3;
  hoops.lifetime = 500;
  hoopsGroup.add(hoops);
  basketball.depth= hoops.depth-5
  }
  
}
function spawnClouds() {
  if (frameCount %250 == 0) {
    clouds = createSprite(width, random(100,200), 20, 30)
  clouds.addImage(cloudsImage);
  clouds.scale= 0.3
  clouds.velocityX = -2;
  clouds.lifetime = 1000;
  cloudsGroup.add(clouds);
  basketball.depth=clouds.depth+1
  }
  }