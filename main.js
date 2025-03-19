playerX = 0;
playerY = 0;

function preload(){
   
}

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    
}

function keyPressed(){
    keyPressed = e.keyPressed;
    if(keyCode = LEFT_ARROW){
        playerX = playerX - 10;
    }else if(keyCode == RIGHT_ARROW){
        playerX = playerX + 10;
    }
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

    player =  square(playerX, playerY, 30);
}

//function windowResized() {
//    resizeCanvas(windowWidth, windowHeight);
//}