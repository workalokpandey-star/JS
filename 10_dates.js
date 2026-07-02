console.log("Date");

let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 25)
// console.log(myCreatedDate);
// let myCreatedDate = new Date(2023, 0, 25, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toDateString());



// time stamp

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));


// 

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth());
console.log(newDate.getMonth() + 1);
console.log(newDate.getFullYear());


// console.log(`${newDate.getDay()} and the Time is`);

newDate.toLocaleString('default', {
    weekday: "long",
})



const date = new Date();
console.log(date);

console.log(date.getFullYear());
console.log(date.getMonth()); // Because months are 0-based.
console.log(date.getDate()); // Returns the day of the month -> start from 1 -31
console.log(date.getDay()); // Returns the day of the week -> start from 0
console.log(date.getHours()); // 0–23
console.log(date.getMinutes()); // 0–59
console.log(date.getSeconds()); // 0–59
console.log(date.getMilliseconds()); // 0–999
console.log(date.getTime()); // Timestamp -> Milliseconds since Jan 1, 1970 -> Equivalent to: Date.now()
console.log(date.toDateString()); // Thu Jul 02 2026
console.log(date.toTimeString()); // 12:32:55 GMT+0530 (India Standard Time)
console.log(date.toISOString()); // Used a lot in APIs.
console.log(date.toLocaleDateString()); // (India): 7/2/2026
console.log(date.toLocaleTimeString()); // (India): 12:35:27 PM

const milliseconds = Date.now() //This is the number of milliseconds since 1 January 1970 (UTC).
console.log(milliseconds);


date.setFullYear(2030);
date.setMonth(0);
date.setDate(20);
date.setHours(18);
console.log(date);


// Date Overflow (Very Important) -> JavaScript automatically adjusts invalid dates.

// Month Overflow
const date2 = new Date(2026, 12, 1);
console.log(date2); // 1 January 2027 -> Month 12 -> January of next year

// Date Overflow
const date3 = new Date(2026, 0, 32);
console.log(date3); // 1 February 2026 -> January has 31 days. -> Day 32 becomes: -> 1 February

// Negative Date
const date4 = new Date(2026, 0, 0);
console.log(date4); //31 December 2025


// Add Days
const date5 = new Date();
date5.setDate(date5.getDate() + 7);
console.log(date5);

// Subtract Days
date5.setDate(date5.getDate() - 30); // 30 days ago.

// Add Months
date.setMonth(date.getMonth() + 1); // Next month.

// Add Years
date.setFullYear(date.getFullYear() + 1); // next year

// Difference Between Two Dates
const start = new Date("2026-01-01");
const end = new Date("2026-01-10");
const diff = end - start;
console.log(diff);

// Convert to Days
const days = diff / (1000 * 60 * 60 * 24); // 1000 ms -> 1 second -> 60 seconds -> 1 minute -> 60 minutes -> 1 hour -> 24 hours -> 1 day
console.log(days);


// Age Calculator
const birthday = new Date("1996-07-31")
const today = new Date();
const age = today.getFullYear() - birthday.getFullYear();
console.log(age); //This is a simple version. For an accurate age, you also compare the month and day.

// Countdown Timer
const target = new Date("2027-01-01");
const now = new Date();
const remaining = target - now;
const day = Math.floor(remaining / (1000 * 60 * 60 * 24));
console.log(day);












