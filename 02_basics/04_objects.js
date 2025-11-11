// const tinderUser = new Object() //singleton object

const tinderUser = {} //Non singleton object


tinderUser.id = "123abd"
tinderUser.name = "Sam"
tinderUser.isLoggedIN = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Deepak",
            lastname: "Pandey"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

// Optional chaining console.log(regularUser.fullname?.userfullname.firstname); Use of question mark

// Combining two objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = Object.assign({}, obj1, obj2) // {} optional parameter but preferred
const obj3 = {...obj1, ...obj2}  //spread as did in arrays
console.log(obj3);


// How we get values from database
const users = [                       // Array of objects
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    }
]

console.log(tinderUser);

console.log(Object.keys(tinderUser)); // Makes an array we can apply loop and all
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // Makes individual array for each key value pair 

console.log(tinderUser.hasOwnProperty("isLoggedIN"));
