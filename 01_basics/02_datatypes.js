// number => Represents both integer and floating-point numbers
const age = 25;
// string => Represents a sequence of characters
const name = "Deepak";
// boolean => Represents a logical entity that can be either true or false
const isStudent = true;
// null => Represents the intentional absence of any object value
const address = null;
// undefined => Represents a variable that has been declared but not assigned a value   
let phoneNumber; // undefined
// symbol => Represents a unique identifier (ES6 feature)
const uniqueID = Symbol("id");
// bigint => Represents integers with arbitrary precision (ES2020 feature)
const bigNumber = 9007199254741991n;

//object => Represents a collection of key-value pairs
const student = {
    name: "Deepak",
    age: 35,
    coure: "Javascript"
}

console.log(typeof age);
console.log(typeof null); // returns 'object' due to a historical bug in JavaScript
console.log(typeof undefined); // returns 'undefined'



