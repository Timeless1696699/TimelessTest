playerX = 0;
playerY = 0;

function preload(){
   
}

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    
}
window.addEventListener("keydown", playerMovement);
function playerMovement(e){
    keyPressed = e.keyPressed;
    console.log(keyPressed);
    if(keyPressed == '37'){
        playerX = playerX - 10;
    }
    if(keyPressed == '39'){
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