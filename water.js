class Water{
    constructor(x,y,width,height,shapeColor){
    //add code to createSprite
  this.obstacle=createSprite(x,y,width,height,blue);
  this.obstacle.shapeColor="blue"
  //add code to add shape color to sprite
  //this.obstacle.shapeColor=shapeColor;
  
  waterGroup.add(this.obstacle)
    }
  }