
class Bullet{
    constructor(weight, speed){
      this.x = 50
      this.y = 200
      this.sprite = createSprite(this.x,this.y,50,50);
      this.weight = weight;
      this.speed = speed
      this.sprite.velocity.x = this.speed;
      this.sprite.shapeColour = colour(255);
   }

   getDeformation(){
       return (0.5*this.weight*this.speed*this.speed)/22500;
   }

   getDeformedColor(){
        
        var deformation = getDeformation();
        if(deformation<100){
         this.sprite.shapeColour = color(0,255,0);
        }else if(deformation>=100 && deformation<180){
         this.sprite.shapeColour = color(230,230,0);
        }else{
         this.sprite.shapeColour = color(255,0,0);
        } 
   }


   
} 