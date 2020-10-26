var fix,move,O1,O2;



function setup() {
  createCanvas(800,400);
  fix = createSprite(200,200,50,100);
  move = createSprite(400,400,100,50);
  O1 = createSprite(200,100,60,50);
  O2 = createSprite(100,100,60,50);
  fix.shapeColor="green";
  move.shapeColor="green";
  O1.shapeColor="green";
  O2.shapeColor="green";
  

  fix.debug=true;
  move.debug=true;
}

function draw() {
  background("black");
  move.x=World.mouseX
  move.y=World.mouseY

  if(isTouching(move,O1)){
    move.shapeColor="red"
    O1.shapeColor="red"
  }
  else{
    move.shapeColor="green"
    O1.shapeColor="green"
  }
 
  drawSprites();
}
