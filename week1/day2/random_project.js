let randDecimal = Math.random();
let randNum = randDecimal * 11;
let randInt = Math.floor(randNum);
 
console.log("randIntOne:", randInt);

let randDecimalTwo = Math.random();
let randNumTwo = randDecimalTwo * 11;
let randIntTwo = Math.floor(randNumTwo);
 
console.log("randIntTwo:", randIntTwo);

let sum = randInt + randIntTwo

console.log("Sum =", sum)

let days = ['Friday', 'Monday', 'Today', 'Yesterday', 'Your Birthday', 'Never', 'Sundae'];
let randaydec = Math.random()
let randayin = randaydec * 6;
let dayint = Math.floor(randayin);
let randay = days[dayint]

console.log("Your day is: ", randay)

let reactions = ['Yay!', 'Ahhhhh!!!', 'Wu wi wa wa', 'Guli Guli', 'Ka chow'];
let ranreadec = Math.random()
let ranreain = ranreadec * 4
let reaint = Math.floor(ranreain)
let ranrea = reactions[reaint]

console.log(ranrea)