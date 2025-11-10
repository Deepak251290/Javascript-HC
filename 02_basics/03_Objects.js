// Two ways to define an object 
// Literals and Constructor

// Singleton -- Constructor  Object.create method (will talk afterwards)

// Object Literals

const mySym = Symbol("key1")

const JSUser = {
    name: "Deepak",
    // "full name": "Deepak Pandey",
    [mySym]: "myKey1",
    age: 35,
    location: "Delhi",
    email: "deepak@google.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday","Saturday"]
}

// console.log(JSUser.email);
// console.log(JSUser["email"]);
// console.log(JSUser[mySym]);
// console.log(typeof JSUser[mySym]);

// To update any value in the object
JSUser.email = "pandey@google.com"
// Object.freeze(JSUser)
JSUser.email = "pandey@oracle.com" 
// console.log(JSUser);

// Function
JSUser.greeting = function(){
    console.log("Hello JS User");
}
JSUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
} 
console.log(JSUser.greeting())
console.log(JSUser.greetingTwo());


