var playerX = 0;
var playerY = 0;
var playerVelocity = 0;
g = false;

function preload(){
  setFloor = (screen.height*3)/4
}

function setup(){
  canvas = createCanvas(windowWidth, windowHeight, myCanvas);
    
}


function draw(){
    background("blue");
    playerVelocity = playerVelocity + 1;

    
    if (keyIsDown(LEFT_ARROW) === true){
        playerX -= 5;
    }
    if (keyIsDown(RIGHT_ARROW) === true) {
        playerX += 5;
    }
    playerY = playerY + playerVelocity;
    if(playerY >= setFloor){
      playerVelocity = 0;
      if(g === false){
        playerY = playerY - 1;
      }else if(g === true){
        playerY = 0;
        playerVelocity = 0;
      }
      
    }
    if(playerY <= 0){
      playerVelocity = 0;
      g = true;
    }else{
      g = false;
    }
    
    
    
    player =  fill(225) && square(playerX, playerY, 30);

    if (mouseIsPressed === true) {
        fill(0);
    }else {
        fill(255);
    }
    circle(mouseX, mouseY, 10);
  console.log(playerVelocity)
}
function keyPressed(){
      if(keyCode === UP_ARROW){
        console.log("its here!");
        playerVelocity = playerVelocity - 20;
        playerY = playerY + playerVelocity;
      }
}

//function windowResized() {
//    resizeCanvas(windowWidth, windowHeight);
//}
