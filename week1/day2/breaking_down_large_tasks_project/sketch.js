function setup() {
    createCanvas(500, 500);
    background(0, 0, 0);
    fill(255,0,0)
    quad(mouseX, 150, mouseX+50 , 150, mouseX+50, 200, mouseX, 200)
    fill(0,255,0)
    quad(mouseX, 250, mouseX+50 , 250, mouseX+50, 300, mouseX, 300)
    fill(0,0,255)
    quad(mouseX, 100, mouseX+50 , 100, mouseX+50, 50, mouseX, 50)
 }

function draw() {
    background(0)
    quad(mouseX, 150, mouseX+50 , 150, mouseX+50, 200, mouseX, 200)
    quad(mouseX, 250, mouseX+50 , 250, mouseX+50, 300, mouseX, 300)
    quad(mouseX, 100, mouseX+50 , 100, mouseX+50, 50, mouseX, 50)
}
 
function mouseClicked() {
   let r = random(0, 255);
   let g = random(0, 255);
   let b = random(0, 255);
   fill(r, g, b);
}