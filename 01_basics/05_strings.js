const name = "Deepak"
const repoCount = 50

// console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`); // Use of back ticks is mostly peferred in writing console


// Amother way to declare a string
let gameName = new String("Hello")

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf("e"));

const newString = gameName.substring(0,2)
console.log(newString);

const anotherString = gameName.slice(-5,2)
console.log(anotherString);

// replace()
// split()
// includes()

