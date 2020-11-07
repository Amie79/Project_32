const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var ball,box;
var stand1,stand2;
var polygon_img,bgimage;
var score=0;
var backgroundImg;

function preload(){
  getBackgroundImg();
  polygon_img=loadImage("hexagon....jpg");
  
}

function setup() {
  engine=Engine.create();
  world=engine.world;
  createCanvas(900,400);
  ground=new Ground();
  stand1=new Stand(405,260,260,5);
  stand2=new Stand(660,355,200,5);
  box1=new Box(300,235,30,40);
  box2=new Box(330,235,30,40);
  box3=new Box(360,235,30,40);
  box4=new Box(390,235,30,40);
  box5=new Box(420,235,30,40);
  box6=new Box(450,235,30,40);
  box7=new Box(480,235,30,40);
  box8=new Box(510,235,30,40);
  box9=new Box(330,195,30,40);
  box10=new Box(360,195,30,40);
  box11=new Box(390,195,30,40);
  box12=new Box(420,195,30,40);
  box13=new Box(450,195,30,40);
  box14=new Box(480,195,30,40);
  box15=new Box(360,155,30,40);
  box16=new Box(390,155,30,40);
  box17=new Box(420,155,30,40);
  box18=new Box(450,155,30,40);
  box19=new Box(390,115,30,40);
  box20=new Box(420,115,30,40);
  box21=new Box(405,75,30,40);

  //Set 2
  box22=new Box(600,330,30,40);
  box23=new Box(630,330,30,40);
  box24=new Box(660,330,30,40);
  box25=new Box(690,330,30,40);
  box26=new Box(720,330,30,40);
  box27=new Box(630,290,30,40);
  box28=new Box(660,290,30,40);
  box29=new Box(690,290,30,40);
  box30=new Box(660,250,30,40);

  polygon=Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingShot=new SlingShot(this.polygon,{x:150,y: 200});
}

function draw() {
  if(backgroundImg)
    background(backgroundImg);

  Engine.update(engine);
  
  strokeWeight(1)
  stroke("brown")
  textSize(25);
  fill("orange");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",50,50);

  
  strokeWeight(2);
  stroke(15);
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("pink");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  fill("yellow");
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  fill("blue");
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  fill("purple");
  box19.display();
  box20.display();
  fill("black");
  box21.display();
  fill(245,120,186);
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  fill(235,188,152);
  box27.display();
  box28.display();
  box29.display();
  fill(246,18,133);
  box30.display();
  
  imageMode(CENTER);
  image(polygon_img, polygon.position.x-50,polygon.position.y-80,40,40);

  slingShot.display();
  text("SCORE:"+ score,750,100);

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  box22.score();
  box23.score();
  box24.score();
  box25.score();
  box26.score();
  box27.score();
  box28.score();
  box29.score();
  box30.score();
 
}
async function getBackgroundImg()
{
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Calcutta");

    var responseJSON=await response.json();
    var datetime=responseJSON.datetime
   
    var hour=datetime.slice(11,13);

    if(hour>=06 && hour<=18 ){
          bg="bgimg.jpg";      

    }
      else{
          bg="night.jpg";
      }

      backgroundImg=loadImage(bg);

    }
    
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){

  if(keyCode===32){
    Matter.Body.setPosition(this.polygon,{x:150,y: 200})
    slingShot.attach(this.polygon);
  }
}
