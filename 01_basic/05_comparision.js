// Just understanding the basic comparision in js
console.log("Basic comparision")
console.log(9 == 9);
console.log(9 <= 9);
console.log(9 != 9);

// Let's understand the some intermediate comparision
console.log("Intermediate comparision");
console.log("2" > 2);
console.log("02" > 2);

// Let's understand some god level comparision
console.log("God level comparision");
console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); // true

// Doing above process with undefined
console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false
console.log(undefined <= 0); //false

// Now time to understand the strict comparision
console.log("Strict comparision ===");
console.log("02" == 2);  //true
console.log("02" === 2); //false