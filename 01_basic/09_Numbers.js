let number = 99;
console.log(number);
console.log(typeof number);

// New way to create a numbers
let Numbers = new Number(99);
console.log(Numbers);

// Another usefull method used in Numbers Datatype 
console.log(Numbers.toString().length);

console.log( typeof Numbers);

let anotherNumber = 123.34;
console.log(anotherNumber.toPrecision(3));  // toPrecision gives us value in round figure

let balance = new Number(1000);
console.log(balance.toFixed(2));   // It gives us value in decimal terms  eg-: 100.00

// Let's understand what is local string
const hundred = 1000000
console.log(hundred.toLocaleString('en-IN'));  // it gives us value in terms of comma separated eg-: 1,000,000

// ------------------------------ Maths --------------------------------------
console.log(Math);  // Generally its an object in javascript

console.log(Math.abs(-2));    // its always gives +ve value
console.log(Math.round(8.7));  // it gives us round figure eg-: 8.7 = 9
console.log(Math.ceil(8.1));     // it gives us upper rounded fig 
console.log(Math.floor(8.9)); // it gives us lower rounded fig
console.log(Math.random()); // Generates a random number btw 0 t0 1
console.log(Math.random() * 8 + 1);
// Write a convineint code 
console.log((Math.random() * 8) + 1);  // This write way to write the code

// Their are various method in Math Library object 

// Just look at the below code 
const min = 8;
const max = 10;
console.log(Math.floor(Math.random() * (max - min + 1)) + min) ;
