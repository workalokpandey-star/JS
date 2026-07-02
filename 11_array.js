console.log("----------- Array -----------");

// const myArr = [0, 1, 2, 3, 4, 5, true, "Alok"]
const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr);

// const newArray = new Array(6, 7, 8, 9, 10)
// console.log(newArray);
// console.log(newArray.length);

// console.log(myArr.push(11)); // returns new length - add in last
// console.log(myArr);
// console.log(myArr.pop()); // returns pop element - remove from last
// console.log(myArr);

// console.log(myArr.unshift(11)); // returns new length - add in start
// console.log(myArr);
// console.log(myArr.shift()); // returns shift element - remove from start
// console.log(myArr);

// console.log(myArr.includes(55)); // false
// console.log(myArr.indexOf(55)); // -1 because not have this value
// console.log(myArr.indexOf(5)); // 5 index


// const strArray = myArr.join(); // convert in string

// console.log(myArr);
// console.log(strArray); // retuen converted string

// const strArray2 = myArr.join("-");
// console.log(strArray2); // retuen converted string with - seration


// slice, splice

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3) // orignal me ni krta h copy deta h

// console.log(myn1);
// console.log("B ", myArr);

// const myn2 = myArr.splice(1,3) // origman array me modifiy krta krta j
// console.log("C ", myArr);
// console.log(myn2); // removed elelment deta h

const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flase", "batman"]

// marvel_heros.push(dc_heros)   // exjesting array pr hi marge krta h
// console.log(marvel_heros);


// Concat
let newArray = marvel_heros.concat(dc_heros); // new copry detA H MARGE KRKE
console.log(newArray);

// ... (spred operator)
const newHeros = [...dc_heros, ...marvel_heros]
console.log(newHeros);

// flat -> flat(1) -> flat(2) -> ya fir sab ke liye flat(Infinity)
const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
console.log(anotherArray);
console.log(anotherArray.flat(Infinity));

// Array.isArray()

console.log(Array.isArray("AlokPandey"));
console.log(Array.from("AlokPandey"));

console.log(Array.from({name: "ALok"})); // agr ni bna payega to [] array dega

console.log(Array.from({length: 5}, (_,i) => i+1));



// Array.of
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

let arraymy = Array(5) //[ <5 empty items> ]
console.log(arraymy); 
console.log(arraymy.length); 
console.log(arraymy[0]); // undefined -> because nothing is stored there.

let arraymy2 = Array.of(5) // use this 
console.log(arraymy2); 



// set

const naam = "AlokPPandey"
 console.log(naam);
 console.log(Array.from(naam));

 const naam2 = new Set(naam)
 console.log(naam2);
 console.log(typeof naam2);

 const realName = Array.from(naam2)
 console.log(realName);
 console.log(realName.join());
 console.log(realName.join(""));

 
//  isArray
console.log(Array.isArray([])); // true
console.log(typeof []); // object

// // ⭐ Interview Concept: Shallow Copy vs Deep Copy -> The spread operator (...) makes a shallow copy.

// // Primitive Values

const arr = [1, 2];

const copy = [...arr];

copy[0] = 100;

console.log(arr);  // [1, 2]
console.log(copy); // [100, 2]

// // ✅ Safe because numbers are copied by value.

// // Nested Arrays
const arr2 = [[1], [2]];
const copy2 = [...arr2];

copy2[0].push(100);

console.log(arr2);
console.log(copy2);

// ❌ Not safe because inner arrays are shared.

// What is a shallow copy?
// A shallow copy creates a new outer object or array, but any nested objects or arrays are still copied by reference. Changes to nested objects affect both the original and the copied version.


// Deep Copy
const obj1 = {
  a: {
    b: 10
  }
};

const obj2 = structuredClone(obj1);

obj2.a.b = 50;

console.log(obj1.a.b);
console.log(obj2.a.b);

// structuredClone() creates a deep copy, so changing one object doesn't affect the other.