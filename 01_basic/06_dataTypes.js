// Brief discription about javascript data type
 
// 1 ) Premitives -: They are generally 7 types 
//(String , Number, Boolean, null, undefined, symbol, bigInt) 
const score = 100;
const runRate = 9.9;

const isLoggedIn = false;
const tempOutside = null;

let userEmail ;

let id = Symbol('123');
let anotherId = Symbol('123');
console.log(id == anotherId);

let bigInt = 1234456789n;
console.log(bigInt);
console.log(typeof bigInt);

// 2) Non-premitives (Refrences)
// Array, object, function

const Arrays = ['Govind', 'Thakur', 'is', 'Millionaire', '99'];

let object = {
    name : 'Govind',
    profession : 'Engineer and Bussinesman',
    value : 'Millionnaire',
}

const myFunction = function() {
    console.log("This is a function");
}
console.log(myFunction);
console.log(myFunction());