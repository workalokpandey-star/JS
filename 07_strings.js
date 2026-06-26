console.log("==============STRINGS===============");


const name = "Alok";
const repoCount = 50;

console.log(name + repoCount + " Value");

// Template Litrals (``) -> string interpulation
console.log(` Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Gtaviycity-6-alok")  // String Object

console.log(gameName);
// console.log(gameName[2]);
// console.log(gameName.__proto__);

// methods
console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(1));
// console.log(gameName.indexOf("t"));
// console.log(gameName.substring(0, 4)); // esme ni de skte h negative values
// console.log(gameName.slice(0, 4));

console.log(gameName.slice(-12, 4));// esme negative values de skte h
 
// const newString1 = "         Alok    "
// console.log(newString1);
// console.log(newString1.length);
// console.log(newString1.trim(" "));
// console.log(newString1.trim(" ").length);
// console.log(newString1.trimStart(" "));
// console.log(newString1.trimStart(" ").length);
// console.log(newString1.trimEnd(" "));
// console.log(newString1.trimEnd(" ").length);


const url = "https//alokpandey.com/alok%12pandey"

console.log(url.replace('%12', "-"));

console.log(url.includes('%12'));
console.log(url.includes('aman'));


console.log(gameName.split("-"));
























