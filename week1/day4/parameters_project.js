function evenOrOdd(number){
    let remainder = number % 2
    if(remainder == 0){
        console.log(number + " is even")
    }else{
        console.log(number + " is odd")
    }
}

evenOrOdd(7)
evenOrOdd(10)

function divisor (num1, num2){
    let remainderD = num1 % num2
    if(remainderD == 0){
        console.log(num1 + " is divisible by" + num2)
    }else{
        console.log(num1 + " is not divisible by " + num2)
    }
}

divisor(9, 3)
divisor(10, 3)
divisor(435586, 29843)

function distanceCalculator(name1, x1, y1, name2, x2, y2){
    console.log(name1 + " is " + x1 + "meters X  and " + y1 + " meters Y")
    console.log(name2 + " is " + x2 + "meters X  and " + y2 + " meters Y")
    let distance = Math.sqrt((x2-x1)**2 + (y2-y1)**2)
    console.log(name1 + " is " + distance + " meters from " + name2)
}

distanceCalculator('Xavier', 847, 90, 'Noah', 100, 90)

function arrayHandler(array){
    console.log(typeof(array))
}

arrayHandler([4, 1, 'a'])