

var car,wall,carImage,carRed,carYellow,carGreen;


var speed, weight; 

function preload(){
	carImage=loadImage("car.png");
	carRed=loadImage("carRed.png");
	carGreen=loadImage("carGreen.png");
	carYellow=loadImage("carYellow.png");
}


function setup() {
  createCanvas(1600, 400);


	speed=random(55,90)
	weight=random(400,1500)

	car=createSprite(150, 200, 50,50);  
	car.addImage("c",carImage); 
	car.addImage("red",carRed);
	car.addImage("green",carGreen);
	car.addImage("yellow",carYellow);
	car.scale=0.7;
	car.debug=true;
	car.setCollider("rectangle",0,0,275,car.height);
	
	car.velocityX = speed;

	car.shapeColor=color(255);


  
	  wall=createSprite(1500,200, 60, height/2);
	  wall.debug=true;
  	wall.shapeColor=color(80,80,80)
}


function draw() {
  background(255);

  if(wall.x-car.x <= (car.width+wall.width)/2)
  {
  	car.velocityX=0;
  	var deformation= 0.5 * weight * speed* speed/22500;
	if(deformation>180)
	{
		car.shapeColor=color(255,0,0);
		car.changeImage("red");
	}

	if(deformation<180 && deformation>100)
	{
		car.shapeColor=color(230,230,0);
		car.changeImage("yellow");
	}

	if(deformation<100)
	{
		car.shapeColor=color(0,255,0);
		car.changeImage("green");
	}
  }  
  
  drawSprites();
 
}


