console.log("====Control Flow===");

// if

// const isUserLoggedIn = true;
// const temperature = 41;


// if(temperature === 40){
//     console.log("Less then 50");
// }else{
//     console.log("More then 50");
// }

// if(isUserLoggedIn) {
//     console.log("executed");  
// }

// if(2 != 3) {
//     console.log("executed");  
// }

// 2 != 3
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200;

// if(score > 100){
//     let power = "fly"
//     console.log(`User Power: ${power}`);
// }

// console.log(`User Power: ${power}`); // not accessable because of scope

// const balance = 1000;
// if (balance > 500) console.log("test") // implsit scope mman lete h {}
// if (balance > 500) console.log("test"), console.log("test2") // do not use this


// if(balance < 500){
//     console.log("less then");
// }else if (balance < 750){
//     console.log("less then 750");
// }else if (balance < 900){
//     console.log("less then 900");
// }else{
//     console.log("less then 1200");
// }



// const userLoggedIn = true;
// const debitCard = true;
// const loggedInFromGoogle = false;
// const loggedInFromEmail = true;

// if (userLoggedIn && debitCard && 2 == 3){
//     console.log("Allow to but course");
// }

// if(loggedInFromGoogle || loggedInFromEmail) { // multipul bhi check kr skte h
//     console.log("User logged in");
// }


// switch

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// const month = 3;

// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("Febuary");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;

//     default:
//         console.log("Default case match");
//         break;
// }



// const userEmail = "alok@gmail.com"

// if(userEmail) {
//     console.log("Got User Email");
// }else {
//     console.log("Don't have user email"); 
// }






// truthy value -> "0", 'false', " ", [], {}, function(){}
// false value -> false, 0, -0, BigInt On, "", null, undefined, NaN



// const userEmail = []

// if(userEmail.length === 0){
//     console.log("Array is empaty");
// }


// const userEmail = {}

// if(Object.keys(userEmail).length === 0){
//     console.log("Object is empaty");
// }


// false == 0 -> true
// false == '' -> true
// 0 == '' -> true




// Nulllish coalescing operator (??): null undefined

// let val1;
// val1 = 5 ?? 10                            //5
// val1 = null ?? 10                         //10
// val1 = 10 ?? null                         //10
// val1 = undefined ?? 15                    //15
// val1 = 15 ?? undefined                    //15
// val1 = null ?? undefined                  //undefined
// val1 = undefined ?? null                  //null
// val1 = null ?? 10 ?? 20                     //10

// console.log(val1);


// Terniary Operator

// condition ? true : false

const iceTea = 100;

iceTea <=80 ? console.log("less then 80") : console.log("More then 80");




