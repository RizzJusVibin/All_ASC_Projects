let num = 100;

while (num > 0){
    console.log(num);
    num--;
}

let ui = process.argv[2];

while (ui > 0){ 
    console.log(ui);
    ui--;
}

//Question 1 Answer: 2 Donalds will print
//Question 2 Answer: An infinite amount of Donalds will print due to b always going to be bigger than a
//Question 3 Answer: 6 Donalds will print
//Questiom 4 Answer: 3 Donalds will print
//Question 5 Answer:

let numt = 0;
 
while (numt > 10) {
   break;
   console.log("Little Donald Drumpf");
   num--;
}


 
let randnum = Math.random();
let randNum = randnum * 11;
let randInt = Math.floor(randNum);

let randnumTwo = Math.random();
let randNumTwo = randnumTwo * 11;
let randIntTwo = Math.floor(randNumTwo);

while (randInt != randIntTwo){

    let randnum = Math.random();
    let randNum = randnum * 11;
    let randInt = Math.floor(randNum);

    let randnumTwo = Math.random();
    let randNumTwo = randnumTwo * 11;
    let randIntTwo = Math.floor(randNumTwo);

    console.log("Random Number One:", randInt, " Random Number Two: ", randIntTwo);

    if(randInt == randIntTwo){
        break
        }
}