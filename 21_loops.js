console.log("======= Loops =======");

// for
// let num = 10
// for(let i = 0; i <= num; i++) {
//     const element = i;
//     if(element == 5){
//         console.log("5 is best number");
//         // break;
//         // continue;
//     }
//     console.log(element); 
// }


// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer Loop Value: ${i}`);
//     for (let j = 0; j <=10; j++) {
//         // console.log(`Inner Loop value: ${j} Outer Loop Value: ${i}`);
//         console.log(i + "*" + j + "=" + i*j);
//     }
// }


// let mrArray = ["flash", "batman", "superman"]

// for (let index = 0; index < mrArray.length; index++) {
//     const element = mrArray[index];
//     console.log(element);
// }



// while loop

// let index = 0;

// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index++
//     // index = index + 2
// }


let myArray = ["flash", "batman", "superman"]
// let arr = 0
// while(arr < myArray.length){
//     console.log(`Value of index is ${myArray[arr]}`);
//     arr++ // arr = arr + 1
// }


// do while
// let score = 1;
// let score = 11;
// do{
//     console.log(`Score is ${score}`);
//     score++
// }while(score <= 10)


// for of

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]

// for(const iterator of arr) {
//     console.log(iterator);
// }

// // let numb = Array.from({length: 10}, (_,i)=> i++) // 9 tk hi hoga
// let numb = Array.from({length: 10}, (_,i)=> i+1)
// console.log(numb);

// for(const iterator of numb) {
//     console.log(iterator);
// }



const greetings = "Hello world!"
// for(const greet of greetings) {
//     console.log(`Each char is ${greet}`);
// }


// for(const greet of greetings) {
//     if(greet == " ") continue;
//     console.log(`Each char is ${greet}`);
// }



// Map

const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "UNITED STATES OF AMERICA")
map.set('FR', "FRANCE")
map.set('IN', "INDIA") // duplicate ni aati h

// console.log(map);

// for(const key of map){
//     console.log(key);  
// }

// for(const [key, value] of map){
//     console.log(key, ":-", value);  
// }


const myObject = {
    'game1': 'NFS',
    'game2': 'spiderman'
}

// for(const [key, value] of myObject){ // Object itetible ni h
//     console.log(key, ":-", value);  
// }

// for in  (Object pr bhi lag jata j)
// for(const key in myObject){
//     console.log(key, ":-", myObject[key]);      
// }



// for(const key in greetings){
//     // console.log(key);      
//     console.log(greetings[key]);      // string pr bhi
// }


// for(const key in myArray){
//     // console.log(key);      
//     console.log(myArray[key]);      // array pr bhi lg skte h
// }


// for(const key in map){  //ye itretble ni h to ni aayega
//     console.log(key);      
// }



// forEach   // return ni krta h kuch
// myArray.forEach(element => {
//     console.log(element);
// });



const language = []
const addLanguage = (...lang) => language.push(...lang)
const lengthNum = addLanguage("Java Script", "Pytan", "Rubi", "C", "C++", "Java")
// console.log(lengthNum);
// console.log(language);

// language.forEach((item) => console.log(item))

language.splice(0)
// console.log(language);
addLanguage(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
// console.log(language);

const values = language.filter((item) => 5 < item)
// console.log(values);

values.splice(2, 2, 11, 12, "Alok")
// console.log(values);


const books = [
    {
        title: "Book 1",
        genre: "Fiction",
        publishDate: 1981
    },
    {
        title: "Book 2",
        genre: "Non-Fiction",
        publishDate: 2004
    },
    {
        title: "Book 3",
        genre: "History",
        publishDate: 1992
    },
    {
        title: "Book 4",
        genre: "Science",
        publishDate: 1992
    },
    {
        title: "Book 5",
        genre: "History",
        publishDate: 2014
    },
    {
        title: "Book 7",
        genre: "Science",
        publishDate: 1996
    },
    {
        title: "Book 8",
        genre: "Science",
        publishDate: 1999
    },
    {
        title: "Book 9",
        genre: "Science",
        publishDate: 2000
    }
];

// const ScienceBooks = books.filter((book)=> book.genre==="Science" && book.publishDate > 1995);
const ScienceBooks = books.filter((book) => book.genre === "Science");
// console.log(ScienceBooks);

// map
const myNumbers = [1, 2, 3, 4, 5, 6, 8, 9, 10]

// const newNums = myNumbers.map((num) => num + 10)
// console.log(newNums);

// const newNums2 = []
// myNumbers.forEach((items) => {
//     newNums2.push(items + 20) 
// })
// console.log(newNums2);


// changing
const newNums = myNumbers
    .map(num => num * 10)
    .map(num => num + 1)
    .filter(num => num >= 40)
console.log(newNums);


// reduce();

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4

const initialValue = 0;

const sunWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
);

console.log(sunWithInitial);
// Expected output: 10


// example

const myVlaues = [1, 2, 3]

const myTotal = myVlaues.reduce(function (acc, curr) {
    console.log(`acc: ${acc} and curr: ${curr}`);
    return acc + curr;
}, 3)

console.log("Total:", myTotal);


const mm = [1, 2, 3]
let acc = 3
mm.forEach((curr)=>{
   acc = acc + curr
})

console.log("Total:", acc);
