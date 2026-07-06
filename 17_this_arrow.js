console.log("============= Arrow function ============");

const user = {
    username: "Alok Pandey",
    price: 999,

    welcomeMessage: function() {
        console.log(`Welcome ${this.username} you paid ${this.price}`);
        console.log(this);
    },
}

// user.welcomeMessage()
// user.username = "Aman"
// user.welcomeMessage()

// console.log(this); // node me empty object aata h pr browser me theek aata h

//  browser me this-> window


// function chai(){
//     let username = "Aman"
//     // console.log(this); // esme kuch hota h
//     // console.log(this.username);// function me kaam ni krta hb sirf object me krta h
// }
// chai()

// const chai = function(){
//     let username = "Aman"
//     // console.log(this); // esme kuch hota h
//     console.log(this.username);// function me kaam ni krta hb sirf object me krta h
// }
// chai()


// const chai = () => {
//     let username = "Aman"
//     // console.log(this); // {} object aata h node me
//     console.log(this.username);// function me kaam ni krta hb sirf object me krta h
// }
// chai()


// Arrow expliset
// const addTwo = (num1, num2)=> {
//     return num1 + num2
// }

// Arrow impliset return
// const addTwo = (num1, num2)=> num1 + num2

// const addTwo = (num1, num2)=> (num1 + num2)
// console.log(addTwo(3, 4));

// object aise krte h return
const addTwo = ()=> ({username: "Alok"})
console.log(addTwo());


// const myArray = [2, 5, 3, 8, 7]

// myArray.forEach(function() {})
// myArray.forEach(()=>{})
// myArray.forEach(()=>())

