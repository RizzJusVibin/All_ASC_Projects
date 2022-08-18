const jared = {
    "fullname": "Jared Murray",
    "favColor": "red",
    "favfood": "icecream",
    "sayName": function(){
        console.log(`My name is ${this.fullname}`)
    }
}

console.log(jared.favColor)
console.log(jared.favfood)
jared.sayName()

const patrick = {
    "fullname": "Patrick Allen",
    "favColor": "blue",
    "favfood": ["pizza", "ramen", 'burgers']
}

console.log(patrick.favfood[2])