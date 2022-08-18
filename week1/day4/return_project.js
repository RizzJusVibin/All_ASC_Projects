function combineStrings(s1, s2){
    let combo = (s1 + s2)
    return combo
}

let alpha = combineStrings("ABC", "DEF");
console.log(alpha)
let pokemon = combineStrings("poke", "mon");
console.log(pokemon)
let friend = combineStrings("friend", "ship");
console.log(friend)
let num = combineStrings("1", "2");
console.log(num)

//Task 2
//Program 1: I think that the arrays of abc, panda bee squirrel, and 55 100 -7 will print on the console
//Program 2: I think that 2 6 1 will print on the console
//program 3: I think an error would occur because the first function is calling a function below it, and order matters.

function checkAnswer(num1, num2, operator, answer){
    if(operator = '+'){
        let pos = num1 + num2
        if (pos != answer){
            return false
        }
        else{
            return true
    }
    if(operator = '-'){
        let neg = num1 - num2
        if (neg != answer){
            return false
        }
        else{
            return ture
        }
    }

}
}

let b1 = checkAnswer(3, 5, "+", 8);
let b2 = checkAnswer(9, 8, "+", 15);
let b3 = checkAnswer(5, 4, "-", 1);
let b4 = checkAnswer(0, 1, "-", -2);
 
console.log(b1);
console.log(b2);
console.log(b3);
console.log(b4);

function oddNumberCatcher(array){
    if (array % 2 != 0){
        console.log(array[[]% 2 != 0])
    }
    else{
        console.log("-1")
    }
}

let i1 = oddNumberCatcher([8, 22, 10, 15, 2, 50, 28]);
let i2 = oddNumberCatcher([1, 2, 3, 4, 5]);
let i3 = oddNumberCatcher([2, 2, 2, 2, 2, 2, 2, 2]);
let i4 = oddNumberCatcher([]);
 
console.log(i1);
console.log(i2);
console.log(i3);
console.log(i4);