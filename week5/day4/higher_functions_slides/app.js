function multiply(a,b){
    return a*b;
}

function subtract(a,b){
    return a-b;
}

const firstNum=multiply(10,50);
const secNum=multiply(20,5);

const thirdNum=subtract(firstNum, secNum);

console.log(thirdNum);

function innerFunction(){
    return "I am a call back function";
}

function anotherInnerFunction(){
    return "Hello World";
}

function outerFunction(callback){
    console.log(callback());
}

outerFunction(innerFunction);
outerFunction(anotherInnerFunction);

const outerFunction1 = function(callback){
    console.log(callback())
}

outerFunction(function(){
return"This is a string"
})

function sayHello (name){
    console.log("hello", name)
}

function sayGoodbye(name){
    console.log("Goodbye", name)
}

function callsWithName(name, sayHiOrGoodbye){
    sayHiOrGoodbye(name);
}

callsWithName("Michael", sayHello);
callsWithName("Sally", sayGoodbye)


const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element))

let cities=["Austin", 'Boston', 'Chicago'];
function upperCaseCities(string){
    console.log(string.toUpperCase())
}

