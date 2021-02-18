
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var dropObject;
var dropArray;
var maxDrop = 140;
var umbrella;
var thunder;
var thunderImg1;
var thunderImg2;
var thunderImg3;
var thunderImg4;
var rand;
var thunderCreatedFrame;

function preload(){
    
  thunderImg1 = loadImage("images/thunderbolt/1.png");
  thunderImg1 = loadImage("images/thunderbolt/2.png");
  thunderImg1 = loadImage("images/thunderbolt/3.png");
  thunderImg1 = loadImage("images/thunderbolt/4.png");
  
  }

function setup(){
    var canvas = createCanvas(450,800);
    engine = Engine.create();
  world = engine.world;


    //dropObject = new Drop(random(0,400),random(0,400));
    dropArray = [];

    umbrella = new Umbrella(230,630)
    
    if(frameCount%50 === 0)
  {
    for(var i = 0; i<maxDrop; i++)
    {
      //dropObject = new Drop(random(0,400),random(0,400));
    
        //dropArray.push (dropObject);
        dropArray.push (new Drop(random(0,400),random(0,400)));
       
       // dropObject.display(i);

    }
    
  }
  
}

function draw(){

    background(0);
  Engine.update(engine);

    
  //if(frameCount%50 === 0)
  //{
    for(var i = 0; i<maxDrop; i++)
    {
      //dropObject = new Drop(random(0,400),random(0,400));
    
     // dropObject.display();
        dropArray[i].display();
        dropArray[i].resetPosition();
        
       // dropObject.display(i);

    }
    
  //}
  
    umbrella.display();
   // console.log(umbrella.body.position.x)

   //createThunder();
drawSprites();
  }



  
   function createThunder(){
    rand = Math.round(random(1,4));
    if(frameCount%80 === 0)
    {
      thunder = createSprite(random(10,370),random(10,30),10,10);
       // thunderCreatedFrame = frameCount;
    
      switch(rand){
    case 1 : thunder.addImage(thunderImg1);
    break;
    case 2 : thunder.addImage(thunderImg2);
    break;
    case 3 : thunder.addImage(thunderImg3);
    break;
    case 4 : thunder.addImage(thunderImg4);
    break;
    default : break;
      }
      thunder.scale = random(0.3,0.6);
    }
    
    
      }
    
    
   
   
  
