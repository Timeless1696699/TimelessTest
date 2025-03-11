

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

    //white circles drawn at mouse position
    circle(mouseX, mouseY, 100);
}

//function windowResized() {
//    resizeCanvas(windowWidth, windowHeight);
//}