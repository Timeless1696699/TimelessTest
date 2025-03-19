playerX = windowWidth/2;
playerY = windowHeight/14;

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

    player =  square(playerX, playerY, 30);
}

//function windowResized() {
//    resizeCanvas(windowWidth, windowHeight);
//}