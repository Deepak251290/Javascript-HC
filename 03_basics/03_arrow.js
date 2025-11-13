const user = {
    username: "Deepak",
    price: 500,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`); //this keyword used for current context
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Pandey"   //Now current context is Pandey
// user.welcomeMessage()

// console.log(this); // empty {} but in console the output is Windows object as earlier there was no standalone application like node/deno


// function chai(){
//     let username = "Deepak"
//     console.log(this.username);  //this keyword will not work here in function
    
// }
// chai() //undefined

// const chai = function(){
//     let username = "Deepak"
//     console.log(this.username);
// }
const chai = () => {
    let username = "Deepak"
    console.log(this);   // output {}
}

// chai()

// const addTwo = (num1, num2) => {  //Normal Arrow function
//     return num1 + num2
// }
//const addTwo = (num1, num2) => num1 + num2  //Implicit return
// Another way
// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "Deepak"}) //For object{} we have to use parenthesis() otherwise undefined O/P
console.log(addTwo(2,5));
