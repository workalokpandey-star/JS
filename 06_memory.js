console.log("===================Memory===============");

// Stack (Primitive), Heap (Non-Primitive)

// Stack (Primitive)
let myYoutubeName = "alokcode";
let anotherName = myYoutubeName;

anotherName = "Gaming Alok"

console.log(myYoutubeName);
console.log(anotherName);


// Heap (Non-Primitive)

let user1 = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let user2 = user1;

console.log(user1);
console.log(user2);

user2.email = "aman@gmail.com"

console.log(user1.email);
console.log(user2.email);



// What is Stack Memory?

// Stack is used to store:

// Primitive data types
// Function execution context
// Local variables

// It is fast because data is stored in a fixed order (LIFO - Last In, First Out).

// Primitive values stored in Stack
let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20

// Memory Representation
// Stack

// a  → 10
// b  → 20

// When you do:

let b = a;

// JavaScript copies the value 10 into b.
// Changing b does not affect a.


// What is Heap Memory?

// Heap is used to store:

// Objects
// Arrays
// Functions

// The actual object lives in the heap, while the stack stores a reference (memory address) to it.

// Example
let user1 = {
  name: "Alok"
};

let user2 = user1;

user2.name = "Ayush";

console.log(user1.name); // Ayush
console.log(user2.name); // Ayush
// Memory Representation
// Stack                    Heap

// user1  ───────────────►  {
//                            name: "Alok"
//                          }

// user2  ───────────────►  Same Object

After:

user2.name = "Ayush";

// Heap becomes:

// {
//    name: "Ayush"
// }

// Both variables point to the same object, so both see the change.



// Interview Answer
// Stack memory stores primitive values and function execution contexts. When primitives are assigned, their values are copied, so changing one variable doesn't affect another.
// Heap memory stores objects, arrays, and functions. Variables hold references to these values. When an object is assigned to another variable, the reference is copied, so both variables point to the same object, and changes made through one variable are visible through the other.

// Easy Rule to Remember
// ✅ Primitive → Stack → Value Copy
// ✅ Object/Array/Function → Heap → Reference Stored in Stack
// ✅ Primitive changes don't affect the original
// ✅ Object changes affect all variables pointing to the same object