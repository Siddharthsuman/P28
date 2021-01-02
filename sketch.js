
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
	 mango1=new Mango(390,477,30,30);
	mango2=new Mango(330,446,30,30);
	mango3=new Mango(440,370,30,30);
	mango4=new Mango(535,396,30,30);
	mango5=new Mango(730,460,30,30);
	mango6=new Mango(640,320,30,30);
	mango7=new Mango(755,400,30,30);
	mango8=new Mango(600,270,30,30);
	// Object boy and Stone
	boy1=new Boy(120,620,120,220);
	stoneObj=new Stone(30,650,15,15);
	rubberObj=new Chain(stoneObj.body,{x:80,y:564});
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(58, 203, 216);
 
  stroke(30);
  textSize(35)
  fill(206, 97, 237)
text("PRESS SPACE TO GET A SECOND CHANCE",10,40)
stroke(30);
  textSize(35)
  fill(206, 97, 237)
text("TO PLAY",10,80)
 tree0.display();
 boy1.display();
 
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
 mango7.display();
 mango8.display();
 stoneObj.display();
 ground0.display();
 rubberObj.display();
 // drawSprites();

 detectollision(stoneObj,mango1);
 detectollision(stoneObj,mango2);
 detectollision(stoneObj,mango3);
 detectollision(stoneObj,mango4);
 detectollision(stoneObj,mango5);
 detectollision(stoneObj,mango6);
 detectollision(stoneObj,mango7);
 detectollision(stoneObj,mango8);
}
function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	rubberObj.fly();
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stoneObj.body,{x:80,y:564})
	  rubberObj.attach(stoneObj.body);
	}
}

function detectollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
  
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if (distance<=lmango.radius+lstone.radius)
   {
	 Matter.Body.setStatic(lmango.body,false);
   } 
  }


