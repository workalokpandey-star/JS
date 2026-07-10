console.log("====================Testing===================");

// let fun = function () {}
// console.log(typeof fun());

// console.log(null > 0); // false
// console.log(null < 0); // false
// console.log(null >= 0); // ture
// console.log(null <= 0); // ture
// console.log(null == 0); // false
// console.log(null == null); // ture

// console.log(undefined > 0); // false
// console.log(undefined < 0); // false
// console.log(undefined >= 0); // false
// console.log(undefined <= 0); // false
// console.log(undefined == 0); // false
// console.log(undefined == undefined); // true
// console.log(undefined == null); // true
// console.log(null == undefined); // true

// const str = "JavaScript";
// console.log(str.charAt(4));
// console.log(str.at(-1));
// console.log(str.slice(7, 4));
// console.log(str.slice(-6));
// console.log(str.substring(4, 10));
// console.log(str.substring(7, 4));

// console.log(Number("100px"));
// console.log(Number(""));
// console.log(Number(" "));
// console.log(Number(null));
// console.log(Number(undefined));
// console.log((123.456).toFixed(2));
// console.log((999.99).toPrecision(3))


// const date = new Date("2026-07-15T10:30:45");
// console.log(date.getMonth())

// console.log(new Date(2026, 12, 1)); 

// function test() {
//   console.log(a);

//   var a = 5;
//   function a() {}
//   console.log(a);
// }

// test();

// for (var i = 1; i <= 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

// for (let i = 1; i <= 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

// for (var i = 0; i < 5; i++) {
//   console.log(i);
// }

// console.log(i);

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// console.log(i); // ReferenceError -> Because i only exists inside the loop block.



// ================= This -> who is calling you
// const car = {
//   brand: "BMW",

//   show() {
//     console.log(this.brand);
//   }
// };

// const bike = {
//   brand: "Yamaha"
// };

// bike.show = car.show;

// bike.show();

// function greet() {
//   console.log(this.name);
// }

// const user1 = {
//   name: "Alok",
//   greet
// };

// const user2 = {
//   name: "Rahul",
//   greet
// };
// console.log(user1.greet === user2.greet);
// user1.greet(); // Alok
// user2.greet(); // Rahul



// ============================================================
// const user = {
//   name: "Alok",

//   greet() {
//     const self = this;
//     const inn = function inner() {
//       console.log(self.name);
//     };

//     inn();
//   }
// };

// user.greet();



// const user = {
//   name: "Alok",

//   greet() {
//     const inn = function inner() {
//       console.log(this.name);
//     }.bind(this);;

//     inn();
//   }
// };

// user.greet();

// const obj = {
//   name: "Alok",

//   regular() {
//     console.log(this);
//   },
  
//   fn : function regular() {
//     console.log(this);
//   },

//   arrow: () => {
//     console.log(this);
//   }
// };

// obj.regular()
// obj.fn()
// obj.arrow()



// function outer() {
//   console.log(this);

//   const inner = () => {
//     console.log(this);
//   };

//   inner();
// }

// // outer()

// const user = {
//   name: "Alok",
//   outer
// };

// user.outer()


// function outer() {
//   console.log(this.name);

//   (()=>{
//     console.log(this.name);
//   })();

  
// }

// // outer()

// const user = {
//   name: "Alok",
//   outer
// };

// user.outer()

// ===================================
