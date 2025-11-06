// let score = "33abc"
// let score = null
let score = undefined

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

/*
"33"  => 33
"33abc" => NaN
true => 1 
*/


// let isLoggedIn = 1
// let isLoggedIn = ""
let isLoggedIn = "Deepak"
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

/*
1 => true
0 => false
"" => false
"Deepak" => true
*/

// ***************************Operations***************************

let value = 7
let negValue = -value
// console.log(negValue); // -7

let str1 = "Hello "
let str2 = "World"
let str3 = str1 + str2
// console.log(str3); // Hello World

console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2"); // refer ToPrimitive rules ECMA specs
console.log(+true); // 1
console.log(+""); // 0

// study about ToPrimitive rules in ECMA specs for better understanding and prefix and postfix ++ -- operators.




