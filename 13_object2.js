console.log("============Object SingleTon============");

// const tinderUser = {} // object litrals

const tinderUser = new Object() // Object singleton

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// const regularUser = {
//     email:"some@gmail.com",
//     fullName: {
//         userFullName:{
//             firstName: "Alok",
//             lastName: "Pandey"
//         }
//     }
// }

// console.log(regularUser.fullName.userFullName.firstName);
// opsnal chaing
// console.log(regularUser.fullName.userFullName?.middelName);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2} // issue aa jayega object me object ho jata h

// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}

// console.log(obj3);

const users = [
    {
        id: Date.now(),
        email: "alok@gmail.com"
    },
    {
        id: Date.now(),
        email: "alok@gmail.com"
    },
    {
        id: Date.now(),
        email: "alok@gmail.com"
    },
    {
        id: Date.now(),
        email: "alok@gmail.com"
    },
    {
        id: Date.now(),
        email: "alok@gmail.com"
    },
    {
        id: Date.now(),
        email: "alok@gmail.com"
    },
    {
        id: Date.now(),
        email: "alok@gmail.com"
    },
    {
        id: Date.now(),
        email: "alok@gmail.com"
    },
    {
        id: Date.now(),
        email: "alok@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // Array return krta h
console.log(Object.values(tinderUser)); // Array return krta h
console.log(Object.entries(tinderUser)); // Array return krta h
console.log(tinderUser.hasOwnProperty("isLoggedIn"))

const tinder = Object.entries(tinderUser)

tinder.forEach((us,i)=>{
    console.log(us);
})


// users.forEach((us)=>{
//     console.log(us.email);
// })



// ====================================================================
// object.keys() -> Returns an array of all keys in an object.

// const OfficeUser = {
//     name: "ALok",
//     age: 25,
//     city: "Delhi"
// };

// console.log(Object.keys(OfficeUser));
// console.log(Object.keys(OfficeUser).length);
// console.log(Object.keys(OfficeUser).length === 0); // Real Use Case -> Check if an object is empty.

// =============== Object.values() -> Returns all values. ===============
// console.log(Object.values(OfficeUser));
// console.log(Object.values(OfficeUser).length);
// console.log(Object.values(OfficeUser).length===0);

// =============== Object.entries() -> Returns an array of key-value pairs. ===============
// console.log(Object.entries(OfficeUser));
// console.log(Object.entries(OfficeUser).length);
// console.log(Object.entries(OfficeUser).length===0);
// // Note-> Why is Object.entries() useful? ->Loop through an object easily.

// for(const [key, value] of Object.entries(OfficeUser)) {
//     console.log(key," : ", value);
// }

// =============== Object.assign() -> Used to merge objects. ===============

// const obj1 = {
//     a: 1,
//     name: "Rahul"
// };

// const obj2 = {
//     b: 2,
//     name: "ALok"
// }

// const result = Object.assign({}, obj1, obj2)
// console.log(result); // why Alok in Name because The last value wins when keys are duplicated.


// // =================== Same thing with Spread Operator ===================

// // Most React developers prefer this.

// const result2 = {
//     ...obj1,
//     ...obj2
// }

// console.log(result2); // why Alok in Name because The last value wins when keys are duplicated.



// // ⭐⭐⭐⭐⭐ Object.freeze() - Makes an object completely immutable (shallow). ⭐⭐⭐⭐⭐

// const newUser = {
//     name: "alok",
//     email: "alok@gmail.com",
// }

// Object.freeze(newUser);

// newUser.email = "alok@google.com"; // can not update
// newUser.age = 25; // can not add
// delete newUser.email // can not delete

// console.log(newUser.email);

// // ⭐⭐⭐⭐⭐ Object.seal() - Allows updating existing properties but prevents adding or deleting. ⭐⭐⭐⭐⭐

// const newUser2 = {
//     name: "alok",
//     email: "alok@gmail.com",
// }

// Object.seal(newUser2);

// newUser2.email = "alokpandey@nextechzone.com" // allow to update 
// newUser2.age = 25; // prevent adding new data
// delete newUser2.email; // prevent deleting data

// console.log(newUser2);
// console.log(newUser2.email);


// ⭐⭐⭐⭐⭐ Object Rest Operator ⭐⭐⭐⭐⭐

// const user5 = {
//   name: "Alok",
//   age: 25,
//   city: "Delhi"
// };

// const {name, ...rest} = user5;

// console.log(name);
// console.log(rest);

// const user = {

//   name: "Alok",

//   address: {

//     city: "Delhi"

//   }

// };



// Object.freeze(user);



// user.address.city = "Mumbai";



// console.log(user.address.city);

// function add(a, b) {
//   console.log(a + b);
// }

// const result = add(2, 3) + 10;
// console.log(result); // 5 NaN -> bacause function not retuning anything so it return unfefined so the expresion is undefined + 10 = NaN

// const getUser = () => ({
//   name: "Alok"
// });
// console.log(getUser());

// const getUser2 = () => { 
//     return {
//   name: "Alok"
//     }
// };
// console.log(getUser2());





