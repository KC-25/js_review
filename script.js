
'use strict'

console.log('hello world');

let randomNumber = 7; //let is locally scoped
var numb = 4; //var is locally scoped
const number = 5; //const is globaly scoped variable

console.log(randomNumber);
console.log(numb);
console.log(number);

document.write('<h1>Java Script Demo</h1>');

// alert("Warning!!! This is an alert message.");
// alert("Did you listen to the warning???");

// let name = prompt("What's your name?");
// console.log(name);

// let myNumb = prompt('Pick a number between 1 and 10');

// if(myNumb < 5){
//     document.write('<h2>You chose a small number.</h2>')
// }

// else if(myNumb > 5){
//     document.write('<h2>You chose a number in the middle.</h2>')
// }

// if(myNumb > 5){
//     document.write('<h2>You chose a large number.</h2>')
// }

//for loops
//for (statement 1; statement 2; statement 3)
//Statement 1 is where you are starting your lop. Most of the time your going to start at index 0. let i=0
//Statement 2 is the condition you want to run through. i < 10.
//Statement 3 is how often you exicute the command. i++

for(let i=0; i<10; i++){
    console.log(i);
}

for(let i=0; i<10; i++){
    console.log(i*2);
}

const numb1=prompt('pick a number')
const numb2=prompt('pick another number');
Number(numb1);
Number(numb2);

function add(numb1, numb2){
    let int1 = parseInt(numb1);
    let int2 = parseInt(numb2);
    document.write(numb1 + ' added too ' + numb2 + ' is equal too: ');
    document.write(int1 + int2);
}
add(numb1, numb2);

