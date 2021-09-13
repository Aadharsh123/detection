var movingRect , fixedRect;
var gmo1 , gmo2 , gmo3 , gmo4;




function setup() {
  createCanvas(1000,1000);
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = "true";

  fixedRect = createSprite(600,400,50,80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = "true";

  gmo1 = createSprite(100,100,50,50);
  gmo1.shapeColor = "green";

  gmo2 = createSprite(200,100,50,50);
  gmo2.shapeColor = "green";

  gmo3 = createSprite(300,100,50,50);
  gmo3.shapeColor = "green";

  gmo4 = createSprite(400,100,50,50);
  gmo4.shapeColor = "green";
}

function draw() {
  background(0);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect , gmo1)){
    movingRect.shapeColor = "red";
    gmo1.shapeColor = "red";
  }
 else{
  movingRect.shapeColor = "green";
  gmo1.shapeColor = "green";
 }



  drawSprites();
}
function isTouching(object1 , object2){
  if(object1.x - object2.x < object1.width/2 + object2.width/2 &&
     object2.x - object1.x < object1.width/2 + object2.width/2 && 
     object1.y - object2.y < object1.width/2 + object2.width/2 &&
     object2.y - object1.y < object1.width/2 + object2.width/2){
     return true;
    }
else{
  return false;
}
}
























