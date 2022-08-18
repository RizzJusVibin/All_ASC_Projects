// if (5 < 10) {
//     console.log("la di dum");
//  }

let userGuess = process.argv[2];
let answer = 5;

if (userGuess == answer){
    console.log("Correct Guess!")
}

else if (userGuess < answer){
    console.log("Too low!")
}

else (userGuess > answer){
    console.log("Too high!")
}