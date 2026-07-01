console.log("Numbers and Math");


// const score = 400;
// console.log(score);

// const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

// // const otherNumber = 23.8966
// // const otherNumber = 123.8966
// const otherNumber = 1123.8966

// console.log(otherNumber.toPrecision(3));
// console.log(otherNumber.toPrecision(4));

// const hundreds = 1000000
// console.log(hundreds.toLocaleString());//by default us value hoti h
// console.log(hundreds.toLocaleString("en-IN")); // india ke hisab se


// ================== Maths =================

// console.log(Math);
// console.log(Math.PI);

// console.log(Math.abs(-4)); // 4
// console.log(Math.round(4.6)); // 5
// console.log(Math.ceil(4.2)); // 5
// console.log(Math.floor(4.9)); // 4
// console.log(Math.min(4,3,6,8,2)); // 2
// console.log(Math.max(4,3,6,8,2)); // 8


// console.log(Math.random()); // 0 se 1 ke bich me hi aaygi
// console.log(Math.random()*10);
// console.log(Math.random()*10 + 1); //min 0 ni ayyegi
// console.log((Math.random()*10) + 1); // 1 se 10 tk hi aaygi
// console.log(Math.floor(Math.random()*10) + 1); // 1 se 10 tk hi aaygi

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);


// 🔥 Interview Cheat Sheet
// Number()

// Converts the whole string.

// Number("100");      // 100
// Number("100px");    // NaN
// Number("10.5");     // 10.5
// parseInt()

// Reads until an invalid character.

// parseInt("100px");    // 100
// parseInt("10.99");    // 10
// parseInt("abc100");   // NaN
// parseFloat()

// Reads floating-point numbers until an invalid character.

// parseFloat("10.55abc"); // 10.55
// parseFloat("100px");    // 100
// parseFloat("abc10");    // NaN
// isNaN() vs Number.isNaN()
// isNaN("Hello");          // true
// Number.isNaN("Hello");   // false

// isNaN(NaN);              // true
// Number.isNaN(NaN);       // true
// Easy way to remember
// isNaN() → Converts first, then checks.
// Number.isNaN() → Checks only; no conversion.
// Number.isInteger()
// Number.isInteger(10);    // true
// Number.isInteger(10.5);  // false
// Number.isInteger("10");  // false






