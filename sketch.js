var wall,car;
var speed,weight;





function setup() {
  createCanvas(1600,800);
  wall=createSprite(400, 200, 50, 50);
  car=createSprite(200,50,50,50);
  speed=createSprite(400,100,20,30);
  weight=createSprite(1500,200,height/60);
  wall.shapecolor="green";
  car.shapeColor="blue";
  speed.shapeColor="orange";
  weight.shapeColor="pink";
speed=random(55,90);
weight=random(400,1500);
car.velocityX = speed;
}

function draw() {
  background(255,255,255);  
  if(wall.x<(car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5 * weight * speed* speed/22509;
    if(deformation>180)
    {
      car.shapeColor=color(255,0,0)

    }
        
     if(deformation<180 && deformation>100)
     {
          car.shapeColor=color(230,230,0);
     }

     if(deformation<100)
     {
       car.shapeColor=color(0,255,0);
     }
    }
  drawSprites();
  } 