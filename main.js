var playerX = 0;
var playerY = 0;
var playerVelocity = 0;

function preload(){
   
}

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    
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
    if(playerY >= 100){
      playerVelocity = 0;
      playerY = playerY - 1;
    }
    //player movement
    //function keyPressed(){
    //    if(keyCode == UP_ARROW){
    //        playerY = playerY - 10;
    //    } else{
    //        playerY = playerY + playerVelocity;
    
    //    }
    //}
    player =  fill(225) && square(playerX, playerY, 30);

    circle(mouseX, mouseY, 10);
    if (mouseIsPressed === true) {
        fill(0);
    }else {
        fill(255);
    }
}

//function windowResized() {
//    resizeCanvas(windowWidth, windowHeight);
//}