var myWall;
var myBullet;
var randomWeight;
var randomSpeed;
var randomThickness;

function setup() {
  createCanvas(1600,400);
  randomWeight = random(30,52);
  randomSpeed = random(223,321);
  randomThickness = random(22,83);
  
 
  myWall =new wall(randomThickness);
  myBullet = new bullet(randomWeight,randomSpeed);
  
}

function hasCollided (lbullet,lwall)
{
   console.log("Came into hasCollided");
   
   var bulletRightEdge = lbullet.sprite.x + lbullet.sprite.width;
  console.log("bulletRightEdge :"+bulletRightEdge);

    if(bulletRightEdge>=myWall.sprite.LeftEdge)
    {
      return true
    }
    return false;
}


function getDamage(){
  var damage = (0.5*myBullet.weight*myBullet.speed*myBullet.speed/(myWall.width*myWall.width*myWall.width));
  console.log(damage);
  return damage;
}


function setWallColor(){
  var damage = getDamage();
  console.log("Bullet weight : "+myBullet.weight);
 console.log("Bullet speed : "+myBullet.speed);
 console.log("Wall thcikness : "+myWall.width);
  
  if(hasCollided(myBullet,myWall)){
    myBullet.sprite.velocity.x = 0;
    myWall.sprite.shapeColour= getDamagedColor();
  }
  
   console.log("Damage "+damage);
   if(damage<10){
    console.log("Setting my wall color to green");
    myWall.sprite.shapeColour = color(0,255,0);
   }else{
    console.log("Setting my wall color to red");
    myWall.sprite.shapeColour = color(255,0,0);
   } 
}

function draw() {
  background(80,80,80); 
 

  myBullet.sprite.collide(myWall.sprite,setWallColor);
  
 
  drawSprites();
}
