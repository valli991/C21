function setup() {
  createCanvas(800,400);
  a= createSprite(400,200,60,50);
  b=createSprite(200,100,40,50);
  car = createSprite(100,200,60,60)
  car.shapeColor = 'blue';
  car.velocityX = 4;
  wall = createSprite(750,200,20,100)
  wall.shapeColor = 'pink';
  a.shapeColor = 'green';
  b.shapeColor = 'green';
}

function draw() {
  background(255,255,255);  
  a.x = World.mouseX;
  a.y =World.mouseY;
  console.log(a.x-b.x);
  /*if(isTouching(car,wall)){
    car.shapeColor = 'pink';
  
  }*/
  bounceOff(car,wall);
 
  drawSprites();
}
function isTouching(object1,object2){
    if((object1.x-object2.x <(object1.width/2+object2.width/2))
    && (object2.x-object1.x <(object1.width/2+object2.width/2))
    && (object1.y-object2.y<(object1.height/2+object2.height/2))
    && (object1.y-object2.y<(object1.height/2+object2.height/2)))
    {
      return true;
    }
    else{
      return false;
    }
}

function bounceOff(object1,object2){
  if((object1.x-object2.x <(object1.width/2+object2.width/2))
  && (object2.x-object1.x <(object1.width/2+object2.width/2)))
  {
    object1.velocityX = object1.velocityX*(-1);
  }
  if((object1.y-object2.y<(object1.height/2+object2.height/2))
  && (object1.y-object2.y<(object1.height/2+object2.height/2))){
    object1.velocityY = object1.velocityY*(-1);
  }
}
