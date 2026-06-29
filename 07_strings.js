console.log("==============STRINGS===============");


const name = "Alok";
const repoCount = 50;

console.log(name + repoCount + " Value");

// Template Litrals (``) -> string interpulation
console.log(` Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Gtaviycity-6-alok")  // String Object

console.log(gameName);
// console.log(gameName[2]);
// console.log(gameName.__proto__);

// methods
console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(1));
// console.log(gameName.indexOf("t"));
// console.log(gameName.substring(0, 4)); // esme ni de skte h negative values
// console.log(gameName.slice(0, 4));

console.log(gameName.slice(-12, 4));// esme negative values de skte h
 
// const newString1 = "         Alok    "
// console.log(newString1);
// console.log(newString1.length);
// console.log(newString1.trim(" "));
// console.log(newString1.trim(" ").length);
// console.log(newString1.trimStart(" "));
// console.log(newString1.trimStart(" ").length);
// console.log(newString1.trimEnd(" "));
// console.log(newString1.trimEnd(" ").length);


const url = "https//alokpandey.com/alok%12pandey"

console.log(url.replace('%12', "-"));

console.log(url.includes('%12'));
console.log(url.includes('aman'));


console.log(gameName.split("-"));


// Easy Trick to Remember
// slice()

// Think:

// ✂️ Cut from start to end.

// Supports negative indexes.
// Doesn't swap indexes.
// substring()

// Think:

// 📏 Always works left to right.

// No negative indexes.
// Swaps if start > end.
// substr()

// Think:

// 📦 Start + Length

// The second parameter is the number of characters to take.

// Interview Answer (30 seconds)
// slice(start, end) extracts characters from start to end (excluding end), supports negative indexes, and returns an empty string if start > end.
// substring(start, end) also extracts characters between two indexes, but negative values are treated as 0, and if start > end, the indexes are swapped.
// substr(start, length) extracts a given number of characters from start. It supports negative start indexes but is deprecated and should not be used in modern JavaScript.





// console.log(null == undefined); // true
// console.log(null === undefined); // false

// console.log(" " == 0);        // true -> " " ->Trim() -> "" -> 0 so 0==0 = true

// console.log([] == false);   // true -> [] -> [].toString() -> "" -> 0 so 0==0 = true


// console.log([] == ![]);      // 1

// console.log([1] == 1);       // 2

// console.log([1,2] == "1,2"); // 3

// console.log([] == "");       // 4

// console.log([] == 0);        // 5

// console.log({} == {});       // 6

// console.log([] === []);      // 7

// console.log(NaN == NaN);     // 8

// console.log(NaN === NaN);    // 9

// console.log(Object.is(NaN, NaN)); // 10


// console.log(![]);
// console.log([]=="");
// console.log("");
// console.log(typeof "");
// console.log(typeof []);
// console.log(typeof {});
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(Boolean(""));   // false
// console.log(Boolean(" "));   // false
// console.log(Boolean("0"));  // true


// if(""){
//     console.log("yes");
    
// }else{
//     console.log("no");
    
// }



// 1. Arrays → strings in coercion
// [] → ""
// [1] → "1"
// [1,2] → "1,2"

// 2. Objects NEVER equal
// {} == {}  // false
// {} === {} // false

// 3. NaN is special
// NaN == NaN → false
// NaN === NaN → false
// Object.is(NaN, NaN) → true

// 4. Empty array trap
// [] == false → true

// 🔥 What is Type Coercion in JavaScript?

// 👉 Type coercion means automatic conversion of one data type into another by JavaScript.

// It happens mostly in:

// == comparisons
// +, -, *, /
// Boolean contexts (if conditions)

// ⚡ Two Types of Coercion
// 1. Implicit Coercion (Auto by JS)
// "5" + 1

// 👉 JS converts number → string

// "5" + "1" = "51"
// "5" - 1

// 👉 JS converts string → number

// 5 - 1 = 4
// 2. Explicit Coercion (Manual by Developer)
// Number("10")
// String(10)
// Boolean(1)



console.log([] + {}); //"[object Object]"
console.log({} + []); // insideconsolelog ->"[object Object]" otherwise 0
console.log([] + []); //""
console.log({} + {}); //"[object Object][object Object]"

console.log("10" - "4" + 2);

console.log(1 + "2" + 3)
console.log(true + true + false)
console.log(null >= 0);
console.log(null > 0);
console.log(undefined == null);
console.log(undefined >= 0);
console.log("5" - - "2");
console.log([] == ![]);

console.log(" " == false);
console.log(Number(""));
console.log(Number(" "));
console.log(Number("1"));
console.log(Boolean(""));
console.log(Boolean(" "));


console.log([] == false);    // true
console.log([] == true);    // false

console.log(NaN + {});
console.log({} + NaN);
console.log(undefined + {});
console.log({} + undefined);

