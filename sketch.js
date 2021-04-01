
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, hammer;
var rubber, stone1, stone2, stone3;
var iron;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	ground = new Ground(400,700,800,10);
	hammer = new Hammer(400,400,90,20);
	rubber = new Rubber(10,20,200,200);
	stone1 = new Stones(100,200,20);
	stone2 = new Stones(250,350,20);
	iron = new Iron(20,40,100,300)

}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
	ground.display();
	hammer.display();
	rubber.display();
	stone1.display();
	stone2.display();
	iron.display();

  drawSprites();
 
}



