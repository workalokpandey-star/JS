console.log("=========== Function ===========");

// function sayMyName(){
//     console.log("A");
//     console.log("L");
//     console.log("O");
//     console.log("K");
// }
// sayMyName()


// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumber(3, 5)
// addTwoNumber(3, "5")
// addTwoNumber(3, "a")
// addTwoNumber(3, null)
// addTwoNumber(3, undefined)

// const result = addTwoNumber(3, 5);
// console.log(result);

// function addTwoNumber2(number1, number2){
//     // let result = number1 + number2;
//     // return result
//     return number1 + number2
// }

// const result = addTwoNumber2(2, 5)
// console.log("Result", result);

// function loginUserMessage(username){
function loginUserMessage(username = "sam"){
    // if(username === undefined){
    // if(undefined){// kyuki undefined false hota h to username esi liye !username krte h
    if(!username){
        console.log("Please enter the user name");
        return;
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("ALok"));
// // console.log(loginUserMessage(""));
// console.log(loginUserMessage());

// =========================================

// function calculateCarPrice(val1, val2, ...num1){
//     return num1
// }

// console.log(calculateCarPrice(200, 400, 500, 2000));



// function calculateCarPrice(val1, val2, ...num1){
//     return [val1, val2, num1]
// }
// const cal = calculateCarPrice(200, 400, 500, 2000);
// console.log(cal);




// const user = {
//     username: "Alok Pandey",
//     prices: 199
// }

// function handleObject(anyObject){
//     console.log(`Username is ${anyObject.username} and Price is ${anyObject.price}`);
// }

// // handleObject(user);
// handleObject({
//     username:"Alok",
//     price: 399
// });


const myArray = [500, 420, 63, 45]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myArray));
console.log(returnSecondValue([600,400,500,200,300]));
