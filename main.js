

function preload(){
   
}

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    
}


function draw(){
    background("blue");
    fill("black");
    circle(mouseX, mouseY, 20);
}

//function windowResized() {
//    resizeCanvas(windowWidth, windowHeight);
//}