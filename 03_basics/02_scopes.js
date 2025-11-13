// var has a global scope and let and const has a block scope

// var a = 300
let a = 200           // global scope
if (true){
    let a = 10
    const b = 20
    // console.log("Inner: ", a);  // block scope
    
}

// console.log(a);

function one(){
    const username ="Deepak"

    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);

    two()
    
}

one()

//********************Interesting*************************

function addone(num){
    return num + 1
}

console.log(addone(25))

addTwo(25)  //Cannot access 'addTwo' before initialization Will be using hoisting further
const addTwo = function(num){  // function but is sometimes called as expression (addTwo a variable can hold many things)
    return num + 2
}

//addTwo(25)