console.log("------------Object-------------");

// singleton -> Object.create


// object literals

// defining a symbol

const userKey = Symbol("userid")

const user = {
    name: "ALok",
    "full name":"Alok Pandey",
    age:25,
    isLogin:true,
    lastLogin:["Monday","Tusday"],
    // userKey: "UID101", // ye symbol ni h ye normal h 
    [userKey]: "UID101" // ye symbol h
}

console.log(user);


// Access Properties -> 

// 1. Dot Notation ⭐⭐⭐⭐⭐
console.log(user.name);

// 2. Bracket Notation ⭐⭐⭐⭐⭐
console.log(user["full name"]);

// also we call sybols also in []
console.log(user[userKey]); // call krte time bhi "" ni lgate h

// aise object me new key and values add or update katre h
user.email = "alokpandey31796@gmail.com";
console.log(user);
// Object.freeze(user)       // object to lock ya freez kr deta h eske baad object me koi bhi change ni ho skta h
// user.emailName = "amana"
console.log(user);

// function in object

user.greeting = function(){
    console.log(`hello ${this.name}`); // current object ki value access krne ke liye this keyword use hota h
}

console.log(user);
console.log(user.greeting); // [Function (anonymous)] funtion ki body call ya defination call hoti h 
console.log(user.greeting()); // function call hota h


// Delete Properties
delete user.age
console.log(user);

// Check if Property Exists like key

// Using in

console.log("isLogin" in user); // true
console.log("age" in user); // false

// Using hasOwnProperty()
console.log(user.hasOwnProperty("name")); // true
console.log(user.hasOwnProperty("age")); // false

const user2 = {
  name: "Alok",
  age: 25
};

const key = "name";
const key2 = "age";

console.log(user2[key]);
console.log(user2[key2]);

// Q4
console.log(user2.key);

// const user2 = {} // error because user2 is alredy decleared
// user2.city = "Lucknow"
// console.log(user2);



// refernce copy
const user3 = {
  name: "Alok"
};

const copy = user3;

copy.name = "Rahul";

console.log(user3.name);
console.log(copy.name);

//  both refere to same heap memory



// ... spread operator
const user4 = {
  name: "Alok"
};

const copy1 = {
  ...user4
};

copy1.name = "Rahul";

console.log(user4.name); // Alok
console.log(copy1.name); // Rahul

{/* Why?

The spread operator creates a new outer object.
Since name is a primitive value (string), it's copied by value.
So changing copy.name doesn't affect user.name.
This is a shallow copy, but because there are no nested objects, it behaves like a completely independent copy. */}