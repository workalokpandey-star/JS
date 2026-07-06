console.log("====== Scope ======");

// var c = 300

// if(true){
//     let a = 10;
//     const b = 20;
//     // var c = 30;
//     c = 30;
// }

// // console.log(a); // block scpoe
// // console.log(b); // block scpoe
// console.log(c); // block scope ni hota h



// =======================


// let a = 300;
// const b = 500;

// if(true){
//     let a = 10;
//     const b = 20;
//     console.log("Inner ",a); // block scope
//     console.log("Inner ",b); // block scope
// }


// console.log(a); // Globe scope
// console.log(b); // Globe scope


// function one(){
//     const username = "ALOK"

//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     // console.log(website);

    
//     two()
// }

// one()


// if(true){
//     const username = "Alok"
//     if(username === "Alok") {
//         const website = "youtube"
//         console.log(username + website);
//     }
//     // console.log(website);
// }

// // console.log(username);



// =================== interesting ===================

console.log(addOne(5));
function addOne(num){
    return num + 1
}


// console.log(addTwo(5));



function outer() {
  let count = 0;

  function inner() {
    console.log(count);
  }

  return inner;
}

const myFunction = outer(); 
console.log(myFunction);


function counter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const increment = counter();

increment();
increment();
increment();

function bankAccount() {
  let balance = 1000;

  return {
    deposit(amount) {
      balance += amount;
      console.log(balance);
    },

    withdraw(amount) {
      balance -= amount;
      console.log(balance);
    }
  };
}

const account = bankAccount();

account.deposit(500);
account.withdraw(300);

console.log(account.balance);


