let myXPos = 100;
let myYPos = 100;
let enemyXPos = 300;
let enemyYPos = 300;
let score = 0;
 
let myLeft, myRight, myTop, myBottom;
let enemyLeft, enemyRight, enemyTop, enemyBottom;

let clefairyImage
let togepiImage

function preload(){
    clefairyImage = loadImage("images/clefairy.png")
    togepiImage = loadImage("images/togepi.png")
}
 
function setup() {
   createCanvas(500, 500);
   noStroke();
 
   rectMode(CENTER);
}
 
function draw() {
   background(0);

   fill(255,255,255)
   textSize(50)
   text("Score: " + score, 10, 50);

//    fill(0, 0, 255);
   image(clefairyImage, enemyXPos, enemyYPos, 50, 50)
//    rect(enemyXPos, enemyYPos, 50, 50);
image(togepiImage, myXPos, myYPos, 50, 50)
//    fill(255, 0, 0);

//    rect(myXPos, myYPos, 50, 50);
 
   if (keyIsDown(LEFT_ARROW)) {
       myXPos -= 3;
   }
 
   if (keyIsDown(RIGHT_ARROW)) {
       myXPos += 3;
   }
 
   if (keyIsDown(UP_ARROW)) {
       myYPos -= 3;
   }
 
   if (keyIsDown(DOWN_ARROW)) {
       myYPos += 3;
   }
 
   myLeft = myXPos - 25;
   myRight = myXPos + 25;
   myTop = myYPos - 25;
   myBottom = myYPos + 25;
 
   enemyLeft = enemyXPos - 25;
   enemyRight = enemyXPos + 25;
   enemyTop = enemyYPos - 25;
   enemyBottom = enemyYPos + 25;
 
   if (myLeft > enemyRight || myRight < enemyLeft || myTop > enemyBottom || myBottom < enemyTop) {
 
   }
 
   else {
       enemyXPos = random(25, 500)
       enemyYPos = random(25, 500)
       score += 1;
   }
}
