console.log("Heelo Js");

const accountId = 144553
let accountEmail = "alok@gmail.com"
var accountPassword = "12345"
accountCity = "Lucknow"
let accountState;

// accountId = 2  // not allowed

// {}   // block scope me bhi var se change kr deta tha

accountEmail = "alok31478@gmail.com";
accountPassword = "45651896";
accountCity = "Dehli";

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
