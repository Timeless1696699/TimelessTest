playerX = 0;
playerY = 0;

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
    circle(mouseX, mouseY, 10);
    if (keyIsDown(LEFT_ARROW) === true) {
        playerX -= 5;
      }
    
      if (keyIsDown(RIGHT_ARROW) === true) {
        playerX += 5;
      }
    player =  square(playerX, playerY, 30);
}

//function windowResized() {
//    resizeCanvas(windowWidth, windowHeight);
//}