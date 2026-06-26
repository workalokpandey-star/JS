console.log("Data Type Summary");

// null == undefined     // true
// null === undefined    // false


// Falsy values (memorize these)
// false
// 0
// ""
// null
// undefined
// NaN

// Everything else is truthy.


// 🔥 Most Important Interview Questions
console.log("5" + 2);       // "52"
console.log("5" - 2);       // 3
console.log(10 == "10");    // true
console.log(10 === "10");   // false
console.log(Boolean(""));   // false
console.log(Boolean("0"));  // true
console.log("2" > 1);       // true
console.log(5 + "5" - 2);   // 53
console.log(null == undefined);   // true
console.log(null === undefined);  // false

const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id === anotherId); // false

const bigNumber = 5415116541515154n  // BigInt

console.log(typeof bigNumber, "Alok");


// Interview Answer
// Q: Is JavaScript statically typed or dynamically typed?
// Answer:
// JavaScript is a dynamically typed language. Variables do not have fixed data types. The type is determined at runtime, and a variable can hold values of different types during execution.
// Example:
// let x = 10;      // Number
// x = "Hello";     // String
// x = true;        // Boolean


// Interview Answer (30 seconds)
// undefined means the value hasn't been assigned yet. For example, a function parameter that wasn't passed or a variable declared without a value.
// null means the value was intentionally set to "no value." For example, an API returning null for a user's middle name or document.getElementById() returning null when an element doesn't exist.

// Data Types -
// 1- Primitive
// 2- Nonprimitive (Refernce Type)



// Primitive - 7 types (Call by Value) jab bhi app inko kahi se kahi copy krte h to jo inska orignal data to uska refence apko ni diya jata orignal data ka copy diya jata h or usme jo bhi app changes krte ho vo changes copy me hote h
// Primitive (Call by Value)
// Primitive data types store actual values. When assigned to another variable, a copy of the value is created. Changes in one variable do not affect the other.
// 1- String
// 2- Number
// 3- Null   // A small note - You might be surprised that typeof null returns "object". This is a long-standing quirk in JavaScript. Even though null represents the intentional absence of a value, typeof null returns "object" for historical reasons.
// 4- undefined
// 5- Symbol (kisi bhi value to uniqe bnane ke liye hota h)
// 6- BigInt


// Non-Primitive - 3 types
// Non-Primitive (Reference Type)
// Non-primitive data types store references to memory locations. When assigned to another variable, the reference is copied, so changes through one variable are reflected in the other.
// 1-Array
// 2-Objects
// 3-Functions


const heros = ["Alok", "Hulk", "Spiderman"]
console.log(typeof heros); //object

let myObj = {
    name: "Alok",
    age: 22,
}
console.log(typeof myObj); //object

const fun = function(){
    console.log("hello world");
    
}

console.log(typeof fun); // function -(function Object)

