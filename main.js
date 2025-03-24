var playerX = 0;
var playerY = 0;
var playerVelocity = 0;

function preload(){
   
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
    if(playerY >= 300){
      playerVelocity = 0;
      playerY = playerY - 1;
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
