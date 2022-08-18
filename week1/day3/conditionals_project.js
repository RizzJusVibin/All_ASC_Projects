let randDecimal = Math.random();
let randNum = randDecimal * 101;
let randInt = Math.floor(randNum);

console.log("Random Number:", randInt)

let userGuess = process.argv[2];
let answer = randInt;

console.log("Your guess: ", userGuess)

if(userGuess == randInt){
    console.log("YOU GUESSED RIGHT")
}

if (userGuess < randInt){
     console.log("Too low!")
 }

if (userGuess > randInt){
     console.log("Too high!")
 }

let score = 0
console.log("Initial Score = ", score)

let userInput = process.argv[3];
console.log("Your input = ", userInput)

if (userInput = 'A' , 'B'){
    console.log("Wrong Answer :(")
    console.log(score -= 1)
}

else if(userInput = 'C'){
    console.log("RIGHT ANSWER. WOOHOOOO!")
    console.log(score += 5)
}

else if(userInput = 'D'){
    console.log('BAD BAD BAD')
    console.log(score -= 50)
}

else if(userInput = "I.KNOW.THE.SECRET"){
    console.log("WELCOME TO NIRVANA")
    console.log(score += 1,000,000)
}

else{
    console.log("Invalid Response")
}
