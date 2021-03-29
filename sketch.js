const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint ;

var chain,ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Bob(600,400,30);
	ball1 = new Bob(570,400,30);
	ball2 = new Bob(540,400,30);
	ball3 = new Bob(510,400,30);
	ball4 = new Bob(480,400,30);
	ground = new Ground(615,270,1200,20);
	ground1 = new Ground(555,270,1400,20);
	ground2 = new Ground(495,270,1600,20);
	ground3 = new Ground(435,270,1800,20);
	ground4 = new Ground(375,270,2000,20);
	chain = new Chain(ball.body,ground.body);
	chain1 = new Chain(ball1.body,ground1.body);
	chain2 = new Chain(ball2.body,ground2.body);
	chain3 = new Chain(ball3.body,ground3.body);
	chain4 = new Chain(ball4.body,ground4.body);

	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background("White	");

  ball.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ground.display();
  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();
  chain.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    Bob.fly();
}