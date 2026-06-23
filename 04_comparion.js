console.log("comparison of datatypes");

// console.log(2 > 1); // true
// console.log(2 >= 1); // true
// console.log(2 < 1); // false
// console.log(2 == 1); // false
// console.log(2 != 1); // true

// console.log("2" > 1); // true
// console.log("02" > 1); // true
// console.log("02" < 1); // false

// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); // true

// the reason is that an equality check == and comparisons > < >= <= work diffrently
// conparisons convert null to a number, treating it as 0
// that's why 
// (3) null >=0 is true
// (1) null > 0 is false


// console.log(undefined > 0); // false
// console.log(undefined < 0); // false
// console.log(undefined == 0); // false
// console.log(undefined >= 0); // false


// === strickt check

console.log("2" === 2); // false
