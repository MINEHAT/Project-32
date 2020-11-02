class Box {

  constructor(x, y, width, height) {

    var options = {
        'restitution':0.8,
        'friction':0.5,
        
    }
    this.visiblity = 255;
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);

  }
  display(){
    

    if(this.body.speed < 6){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(2.3);
      stroke("green");
      fill("white");
      rect(0, 0, this.width, this.height);
      pop();

    }else{

      World.remove(world,this.body);
      push();
      tint(0,255,0);
      this.visiblity = this.visiblity-5;
      pop();
    }

   
  }

  score(){

    if(this.visiblity < 0 && this.visiblity >- 105){
       
      Score++;
    }
  }
    
  
};
