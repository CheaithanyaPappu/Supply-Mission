
var bullet, wall, thickness
var speed, weight



function setup() {

  createCanvas(1200,400);
  speed = random(100,150);
weight = random (30,52);

thickness = random (22,83);
  bullet = createSprite(50, 200, 20, 10);
  bullet.velocityX = speed;
wall = createSprite (1100,200,thickness,height/2);




}

function draw() {
  background (0); 

if (wall.x-bullet.x<(bullet.width+wall.width/2))
{
  bullet.velocityX=0;
  var damage =( 0.5 * weight * speed * speed)/(3*thickness);

  console.log(damage);

  if(damage>5500)
   {
     wall.shapeColor = "red";
   }
   if (damage<5500)
   {
     wall.shapeColor = "green";

   
   
}
}





  drawSprites();
}