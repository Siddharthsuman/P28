
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;


var tree0,ground0;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;
var boy1,stoneObj,rubberObj;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree0=new Tree(500,100,500,500);
     ground0=new Ground(width/2,690,800,20);
	
	 //Mangoes sprites
	 mango1=new Mango(390,477,45,45);
	mango2=new Mango(330,446,45,45);
	mango3=new Mango(440,370,45,45);
	mango4=new Mango(535,396,45,45);
	mango5=new Mango(730,460,45,45);
	mango6=new Mango(640,320,45,45);
	mango7=new Mango(755,400,45,45);
	mango8=new Mango(600,270,45,45);
	// Object boy and Stone
	boy1=new Boy(120,620,120,220);
	stoneObj=new Stone(30,650,30,30);
	rubberObj=new Chain(stoneObj.body,{x:50,y:390});
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
 
  mango1.display();
  mango2.display();
  mango5.display();
 tree0.display();
 boy1.display();
 mango3.display();
 mango4.display();
 mango6.display();
 mango7.display();
 mango8.display();
 stoneObj.display();
 rubberObj.display();
  ground0.display();
  drawSprites();
 
}



