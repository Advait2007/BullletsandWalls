
class bullet{
    constructor(weight, speed){
      this.x = 50;
      this.y = 200;
      this.sprite = createSprite(this.x,this.y,50,50);
      this.weight = weight;
      this.speed = speed;
      this.sprite.velocity.x = this.speed;
      this.sprite.shapeColour = color(255,255,255);
   }

   setSpeed(speed) {
       this.speed = speed;
       this.sprite.velocity.x = this.speed;
   }

   
} 

class wall{
    constructor(width){
      this.x = 1500;
      this.y = 200;
      this.sprite = createSprite(this.x,this.y,20,400);
      this.width = width;
      this.sprite.shapeColour = color(255,255,255);
   } 
}