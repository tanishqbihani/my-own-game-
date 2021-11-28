
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var trampolin ,trampImg
var bell ,bellImg 
var ground;

function preload()
{
	bellImg = loadImage("bell.png");
	trampImg = loadImage("trampolin.png")
}

function setup() {
	createCanvas(700, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Ground(350,640,700, 20);
	bell= new Bell(350,350);
	trampolin = new Trampolin();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250);


//

ground.display();
trampolin.display();
bell.display();
  
 // drawSprites();
  
}



