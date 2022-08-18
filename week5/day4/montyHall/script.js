

let sets = [
    ["imgs/car.png", "imgs/goat.png", "imgs/goat.png"],
    ["imgs/goat.png", "imgs/car.png", "imgs/goat.png"],
    ["imgs/goat.png", "imgs/goat.png", "imgs/car.png"]
]

let switchBtn = document.querySelector("#switchButton");
let stayBtn = document.querySelector("#stayButton");
let resetBtn = document.querySelector("#resetButton");
 
let resultOne = document.querySelector("#result1");
let resultTwo = document.querySelector("#result2");
let resultThree = document.querySelector("#result3");
 
let doorOne = document.querySelector("#door1");
let doorTwo = document.querySelector("#door2");
let doorThree = document.querySelector("#door3");
 
let gameText = document.querySelector("#gameText");

let switchWR = document.querySelector("#switchWR");
let stayWR = document.querySelector("#stayWR");

doorOne

let state = "start";
let answer;
let montyOpen;
let prizes = [resultOne, resultTwo, resultThree];
let timesSwitch = 0;
let switchWon = 0;
let timesStayed = 0;
let stayWon = 0;

function getRandInt(num){
   return  Math.floor(Math.random()*num);
}

function newGame(){
    switchBtn.getElementsByClassName.display = "none";
    stayBtn.getElementsByClassName.display = "none";
    resetBtn.getElementsByClassName.display = "none";

    let randSet = sets[getRandInt(sets.length)]
    resultOne.src = randSet[0]
    resultTwo.src = randSet[1]
    resultThree.src = randSet[2]
}

newGame()