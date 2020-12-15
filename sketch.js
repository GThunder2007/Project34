const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	bobDiameter = 5

	
	roofObject = new Roof(width/2, 200, width/2, 25);
	bobObject1 = new Ball(520,500)
	bobObject2 = new Ball(530,500)
	bobObject3 = new Ball(540,500)
	bobObject4 = new Ball(550,500)
	bobObject5 = new Ball(560,500)
	rope1 = new Rope(bobObject1.body,roofObject.body, -bobDiameter*10, 0)
	rope2 = new Rope(bobObject2.body,roofObject.body, -bobDiameter*5, 0)
	rope3 = new Rope(bobObject3.body,roofObject.body, -bobDiameter*2.5, 0)
	rope4 = new Rope(bobObject4.body,roofObject.body, -bobDiameter*-5, 0)
	rope5 = new Rope(bobObject5.body,roofObject.body, -bobDiameter*-10, 0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  roofObject.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  bobObject1.display()
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display()
}

function mouseDragged() {
	Matter.Body.setPosition(bobObject5.body, { x: mouseX, y: mouseY });
  }