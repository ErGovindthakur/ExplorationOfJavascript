// Strings code in javascript
const name = "Govind";
const repoCount = 18;
// console.log(name + repoCount);  This is old way to concatinate the string

console.log(`Hello my name is ${name .toUpperCase()} and my total repo on github is
 ${repoCount}`); // This is the modern day string concatination

 // New or another way to declaring a Strings
 let gameName = new String("govindaGo");

//  console.log(gameName[0]);
//  console.log(gameName.__proto__);
//  console.log(gameName.toUpperCase());
// console.log(gameName.charAt(0));
// console.log(gameName.indexOf("G"));

let newgame = gameName.substring(0,4);  // here last digit will not be
// consider as 4 it will be taken as 3
// console.log(newgame);

// Let's know about some other method related to string
let anotherString = gameName.slice(-9,2);
console.log(anotherString);

// trim method = trim() = it is used to remove extra space
let address = "   Go Go Go    ";
console.log(address);
// using trim() method
console.log(address.trim()); // it is used to remove extra space from beigining and at last

// Exploring some additional features about the string
let url = "https://govindThakur%20.com";
console.log(url);
// Let's use replace() method
let replace = url.replace('%20','_');
console.log(replace);

//includes() method find if the value is exist or not
console.log(url.includes('govind'));
console.log(url.includes('%20'));
console.log(url.split('_',3));

/* Always use (``) backtique in string templates 
bcz it is a modern day pratices  And TRY TO MASTER String chapter*/