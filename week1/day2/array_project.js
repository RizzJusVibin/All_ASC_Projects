let letters = ['A', 'B', 'C', 'D', 'E'];

console.log(letters[0]);
console.log(letters[1]);
console.log(letters[2]);

let days = ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

console.log(days[0]);
console.log(days[6]);
console.log(days.length);
console.log(days[days.length]);
console.log(days[days.length - 1]);

let myArray = ['Do', 'Re', 'Mi', 'Fa', 'So', 'La', 'Ti', 'Do'];

console.log(myArray);

myArray.length = 2;
console.log(myArray);

myArray.length = 0;
console.log(myArray);

let scores = [85, 93, 65, 92, 81, 93];
let addscore = scores[0] + scores[1] + scores[2] + scores[3] + scores[4] + scores[5];
let avgscore = addscore/scores.length
console.log("Average: " + avgscore)

let myArrayLet = ['a', 'b', 'c', 'd']
console.log(myArrayLet.reverse())