// 📌 1. null Special Cases
console.log(null == undefined);   // true
console.log(null === undefined);  // false

console.log(null == 0);           // false
console.log(null > 0);            // false
console.log(null < 0);            // false
console.log(null >= 0);           // true
console.log(null <= 0);           // true

console.log(null + 1);            // 1
console.log(null - 1);            // -1
console.log(Number(null));        // 0


// // ✅ Remember
// null == undefined → true
// Number(null) → 0


// 📌 2. undefined Special Cases
console.log(undefined == null);   // true
console.log(undefined === null);  // false

console.log(undefined == 0);      // false
console.log(undefined > 0);       // false
console.log(undefined < 0);       // false
console.log(undefined >= 0);      // false
console.log(undefined <= 0);      // false

console.log(undefined + 1);       // NaN
console.log(undefined - 1);       // NaN

console.log(Number(undefined));   // NaN

// ✅ Remember
// undefined becomes NaN in numeric operations.

// 📌 3. Empty String
console.log("" == 0);       // true
console.log("" === 0);      // false

console.log("" + 1);        // "1"
console.log("" - 1);        // -1

console.log(Number(""));    // 0


// 📌 4. Space String
console.log(" " == 0);      // true
console.log(" " == false);  // true

console.log(Number(" "));   // 0

// Because:

// " "
// ↓

// trim()

// ↓

// ""

// ↓

// 0

// 📌 5. Boolean Conversion
console.log(true + 1);      // 2
console.log(false + 1);     // 1

console.log(true == 1);      // true
console.log(false == 0);     // true

console.log(true === 1);     // false
console.log(false === 0);    // false


// 📌 6. Empty Array
console.log([] == false);    // true
console.log([] == 0);        // true
console.log([] == "");       // true

console.log([] + 1);         // "1"
console.log([] + []);        // ""
console.log([] + {});        // "[object Object]"

console.log([1] + 2);        // "12"
console.log([1,2] + 3);      // "1,23"

console.log([1] * [2]);      // 2
console.log([1] - [2]);      // -1


// 📌 7. Array Comparisons
console.log([1] == 1);       // true
console.log([0] == false);   // true
console.log([1,2] == "1,2"); // true

console.log([] === []);      // false
console.log([1] === [1]);    // false


// 📌 8. Objects
console.log({} == {});       // false
console.log({} === {});      // false

console.log([] == {});       // false

console.log({} + []);        // "[object Object]" (inside console.log) otherwise 0
console.log([] + {});        // "[object Object]"


// 📌 9. NaN
console.log(NaN == NaN);         // false
console.log(NaN === NaN);        // false

console.log(Object.is(NaN, NaN)); // true

console.log(Number("Hello"));    // NaN


// 📌 10. Infinity
console.log(1 / 0);          // Infinity
console.log(-1 / 0);         // -Infinity

console.log(Infinity > 999); // true

console.log(Infinity + 1);   // Infinity

console.log(Infinity - Infinity); // NaN


// 📌 11. String + Number
console.log("5" + 1);     // "51"
console.log(1 + "5");     // "15"

console.log("5" - 1);     // 4
console.log("5" * 2);     // 10
console.log("5" / 2);     // 2.5


// 📌 12. Operator Precedence
console.log("10" + 5 * 2); // "1010"

console.log((10 + 5) * 2); // 30


// 📌 13. + vs -
console.log("5" + true);      // "5true"

console.log("5" - true);      // 4

console.log("5" + false);     // "5false"

console.log("5" - false);     // 5
console.log("5" - - "2");     // 7


// 📌 14. Double NOT (!!)
console.log(!!1);         // true
console.log(!!0);         // false

console.log(!!"Hello");   // true
console.log(!!"");        // false

console.log(!![]);        // true
console.log(!!{});        // true

console.log(!!null);      // false
console.log(!!undefined); // false


// 📌 15. Famous Interview Question
console.log([] == ![]);   // true

// Explanation:

// ![]

// ↓

// false

// ↓

// [] == false

// ↓

// "" == 0

// ↓

// 0 == 0

// ↓

// true

// 📌 16. Truthy & Falsy Values
// Falsy (Only 8 values)

// false
// 0
// -0
// 0n      // BigInt zero
// ""
// null
// undefined
// NaN

// Everything else is truthy:

// []
// {}
// "0"
// "false"
// " "
// 42
// -1
// function(){}

// 📌 17. Objects Compare by Reference

const a = {};
const b = {};

console.log(a == b);   // false
console.log(a === b);  // false

const c = a;

console.log(a === c);  // true

// 🧠 Interview Memory Table
// Expression	                              Result
// null == undefined	                      ✅ true
// null == 0	                              ❌ false
// null >= 0	                              ✅ true
// undefined == null	                      ✅ true
// undefined >= 0	                          ❌ false
// [] == false	                              ✅ true
// [] == 0	                                  ✅ true
// [] == ""	                                  ✅ true
// [1] == 1	                                  ✅ true
// [0] == false	                              ✅ true
// {} == {}	                                  ❌ false
// [] === []	                              ❌ false
// NaN == NaN	                              ❌ false
// Object.is(NaN, NaN)	                      ✅ true
// "5" + 1	                                      "51"
// "5" - 1	                                      4
// [] + []	                                      ""
// [] + {}	                                      "[object Object]"
// [1,2] + [3,4]	                              "1,23,4"
// [] == ![]	                              ✅ true


// 💡 Interview Tip

// Don't try to memorize every weird result. Instead, remember these core rules:

// + concatenates if either operand is (or becomes) a string; otherwise it adds numbers.
// -, *, / always try to convert operands to numbers.
// == may perform type coercion.
// === never performs type coercion.
// Objects and arrays compare by reference, not by their contents.

// Mastering these rules makes most "special cases" much easier to reason through instead of memorizing them.