//Create variables here
var dog,dogimg,dogimg1;
var database;
var foodS,foodStock;
function preload()
{
  dogimg = loadImage("images/dogimg.png");
  dogimg1 = loadImage("images/dogimg1.png");
	//load images here
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250,300,150,150);
  dog.addImage(dogimg);
  dog.scale = 0.15;
  foodStock=database.ref("Food");
  foodStock.on("value",readStock);
  textSize(20);
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogimg1);
}

  drawSprites();
  //add styles here
  fill(255,255,254);
   stroke("black");
    text("Food remaining : "+foodS,170,200); 
    textSize(13); 
    text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
}
function readStock(data){
  foodS = data.val();
}
function writeStock(x){
if(x<=0){
  x=0;
}else{
  x=x-1;
}

  database.ref("/").update({
    Food:x
  })
}


