const accountID = 307838
let accountEmail = "deepak@google.com"
var accountPassword = "12345"
accountCity = "Delhi"  // global variable (declared without var, let or const) but not prefered

let accountState; // undefined

// accountID = 4444  not allowed - const cannot be changed

accountEmail = "pandey@google.com" // allowed - let can be changed
accountPassword = "54321" // allowed - var can be changed
accountCity = "Noida" // allowed - global variable can be changed
console.log(accountID);

/*
Prefer noy to use var and use const most of the time. 
Use let only when you know that value will change.
Because of issue in block scope with var
*/


console.table([accountID, accountEmail, accountPassword, accountCity, accountState]);
