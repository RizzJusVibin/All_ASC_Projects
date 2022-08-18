let x;
x = 1;

console.log("The value of x is", x);

let var1 = 20;
let var2 = 30;
let var3 = "ABC";
let var4 = "def";
let var5 = "20";
let var6 = "30";

let answer1 = var1 + var2;
let answer2 = var3 + var4;
let answer3 = var5 + var6;

console.log(answer1, answer2, answer3);

let num1 = 5;
let num2 = 3;
num1 = 10;

let sum = num1 + num2;
num1 = 10;
console.log("Sum:", sum);

let luckyNumber = 8;
luckyNumber = 2;

console.log(luckyNumber);

// We're going to earn a profit by reselling tickets
// We bought some tickets to see Billie Eilish
// 4 regular tickets for $45 each and 2 front row tickets for $75 each
let cost = (45 * 4 + 75 * 2);

console.log('Cost:', cost);
 
// We're reselling the tickets for 50% above the original price
let sellingPrice = 1.5;
console.log('Selling price:', cost * sellingPrice);
 
// But StubHub, the online ticket selling platform, charges a 20% seller fee
let fee = 0.2;
console.log('Seller fee:', cost * sellingPrice * fee);
 
// Our total profit:
console.log('Profit:', cost * sellingPrice - cost - cost * sellingPrice * fee);