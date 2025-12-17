// Object Literals
const user = {
    username: "deepak",
    loginCount: 7,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from the database");
        // console.log(`Username: ${this.username}`);
        // console.log(this);
        
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// ****************************************************************************

// Constructor function
// const promiseOne = new Promise()   // new keyword is constructor function


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this
}

const userOne = new User("deepak", 7, true)
const userTwo = new User("ChaiaurCode", 8, false)  //overrides the value of the userOne that's why we use new keyword
console.log(userOne);
// console.log(userOne.constructor);

console.log(userTwo);

