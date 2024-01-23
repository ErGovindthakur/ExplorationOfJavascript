// All about memory in javascript

// Stack (Primitive), Heap(Non-primitive)

// Example of stack memory with primitive dataType
let name = "Govind";
let Friend = name;
console.log(name); // Output = Govind
console.log(Friend); // Output = Govind

Friend = "Ritesh";
console.log(Friend); // Output = Ritesh
console.log(name); // Output = Govind


// Taking an exaple of Refrences
let myDetails = {
    name : "Govind",
    age : 19,
}
let myAnotherDetails = myDetails;
console.log(myDetails);
console.log(myAnotherDetails);

// but here is the real game with refrences bcz of heap memory
myAnotherDetails.value = "Millionaire";
console.log(myDetails);
console.log(myAnotherDetails);

// which is stored in heap memory is directly called by real value 
// But which is stored in stack memory called by copy of the real value
// Done
