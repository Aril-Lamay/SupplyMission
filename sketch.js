//declaring the variables
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3;

function preload()
{
	//loading the images
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	//creating the canvas
	createCanvas(800, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	//creating the boxes and the sprites
	box1 = new Box(400,650,200,20);
	box2 = new Box(295,620,10,100);
	box3 = new Box(505,620,10,100);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);

  //displaying the boxes
  box1.display();
  box2.display();
  box3.display();

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  //displaying the sprites
  drawSprites();
}

//when down arrow is pressed then release the package
function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false);
    
  }
}



