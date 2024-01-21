let data = 33;
console.log(typeof data); // output = number ;

data = "33";
console.log(typeof(data)); //output = String

let convert = Number(data);
console.log(typeof convert); //output = number
console.log(convert);

let another = "33";
console.log(typeof another); //output = string
let tocheck = Number(another);
console.log(typeof tocheck);

let explore = "33abc";
console.log(explore);
let toconvert = Number(explore);
console.log(typeof toconvert);
console.log(toconvert);

let undef = undefined;
console.log(undef);
console.log(typeof undef); //output = undefined
 
let empty = null;
console.log(empty);
console.log(typeof empty); // output = object
let emptycheck = Number(empty);
console.log(empty); //output = 0
console.log(typeof empty); //output  = object
 
let boolean = true;
console.log(boolean);
let num = Number(boolean);
console.log(typeof boolean);

/*Conversion notes
"33" => 33
"33abc" => NaN
true => 1; false => 0

Expect 0, " " null undefined 
all values are true in boolean*/
/*

// Here we learnt how to convert a datatypes into another datatypes
Number(); //It converts any value into numeric value
String(); // It converts any value into string value
Boolean(); // It converts any value into boolean value

*/
let exploration = 27;
console.log(typeof exploration);
let string = String(exploration); 
console.log( typeof string);
let bool = Boolean(exploration);
console.log(typeof bool);