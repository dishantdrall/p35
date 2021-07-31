var balloon, background;
function preload(){
   backgroundImg =loadImage("cityImage.png");
   balloonImage=loadAnimation("hotairballoon1.png","hotairballoon2.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  balloon = createSprite(100,400,20,20);
  balloon.addAnimation("balloon",balloonImage);
  balloon.scale = 0.4;


}

function draw() {

  background(backgroundImg);

    if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x-10;
    }
  else if(keyDown(RIGHT_ARROW)){
    balloon.x=balloon.x +10;
    //write code to move air balloon in right direction
  }
  else if(keyDown(UP_ARROW)){
    balloon.y=balloon.y -10;
    //write code to move air balloon in up direction
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.y=balloon.y+10;
    //write code to move air balloon in down direction
  }

  drawSprites();
}
