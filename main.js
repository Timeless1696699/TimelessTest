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
    //when mouse button is pressed, circles turn black
    if (mouseIsPressed === true) {
        fill(0);
    }else {
        fill(255);
    }
    //white circle drawn at mouse position
    playerVelocity = playerVelocity + 1;

    circle(mouseX, mouseY, 10);
    if (keyIsDown(LEFT_ARROW) === true){
        playerX -= 5;
    }
    if (keyIsDown(RIGHT_ARROW) === true) {
        playerX += 5;
    }
    //player movement
    function keyPressed(){
        if(keyCode == UP_ARROW){
            playerY = playerY - 10;
        } else{
            playerY = playerY + playerVelocity;
        }
    }
    player =  square(playerX, playerY, 30);
}

//function windowResized() {
//    resizeCanvas(windowWidth, windowHeight);
//}