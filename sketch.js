const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground;
var platform1,platform2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,
block10,block11,block12,block13,block14,block15,block16,block17,block18,block19,block20,block21,block22,block23,block24,block25,block26,block27,block28,block29;
var slingShot,ball,ballImage;

var Score = 0;


function preload(){

  ballImage = loadImage("BAD_POLYGON.png");

}

//615,180
function setup() {
  createCanvas(900,400);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground(800,399,1600,30);

  ball = Bodies.circle(50,200,50);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:100,y:200});

  platform1 = new Ground(390,300,250,10);
  platform2 = new Ground(700,200,200,10);

  platform1.debug = true;
  
  block1 = new Box(300,275,30,40);
  block2 = new Box(330,275,30,40);
  block3 = new Box(360,275,30,40);
  block4 = new Box(390,275,30,40);
  block5 = new Box(420,275,30,40);
  block6 = new Box(450,275,30,40);
  block7 = new Box(480,275,30,40);
  block8 = new Box(330,235,30,40);
  block9 = new Box(360,235,30,40);
  block10 = new Box(390,235,30,40);
  block11 = new Box(420,235,30,40);
  block12 = new Box(450,235,30,40);
  block13 = new Box(360,195,30,40);
  block14 = new Box(390,195,30,40);
  block15 = new Box(420,195,30,40);
  block16 = new Box(390,155,30,40);
  block17 = new Box(625,180,30,40);
  block18 = new Box(655,180,30,40);
  block19 = new Box(685,180,30,40);
  block20 = new Box(715,180,30,40);
  block21 = new Box(745,180,30,40);
  block22 = new Box(775,180,30,40);
  block23 = new Box(655,140,30,40);
  block24 = new Box(685,140,30,40);
  block25 = new Box(715,140,30,40); 
  block26 = new Box(745,140,30,40);
  block27 = new Box(685,100,30,40);
  block28 = new Box(715,100,30,40);
  block29 = new Box(701,60,30,40);
  



  block1.debug = true;

   


 // createSprite(400, 200, 50, 50);
}

function draw() {
  background(0,255,255);

  text("SCORE : " + score,750,40);
  
  ground.display();
  platform1.display();
  platform2.display();

  
 
  

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();  
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  //ball.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();  
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.s8core();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  block25.score();
  block26.score();
  block27.score();
  block28.score();
  block29.score();

  
  


  slingShot.display();
  imageMode(CENTER)
  image(ballImage,ball.position.x,ball.position.y,40,40)

  var x = mouseX;
  var y = mouseY;

  fill("red");
  text(x + "," +y,x,y);
  drawSprites();
}

function mouseDragged(){

  Matter.Body.setPosition(this.ball,{x:mouse,y:mouseY});

}


function mouseReleased(){

  slingShot.fly();


}

function keyPressed(){

  if(keyCode === 32){

    slingShot.attach(bodyA,polygon);

    

  }
}





