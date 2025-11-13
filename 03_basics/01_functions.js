function myFuncName(){
    console.log("D")
    console.log("E")
    console.log("E")
    console.log("P")
    console.log("A")
    console.log("K")
}

// myFuncName()   // only function name is reference and with () is execution

// Basic Sum function

// function addTwoNumbers(number1, number2){ // called as parameters in () as naming conventions
//     console.log(number1 + number2)
// }

addTwoNumbers()  // Gives NaN as arguments(while executing) not passed
addTwoNumbers(2,5)
addTwoNumbers(2,"3")

// const result = addTwoNumbers(2,5)
// console.log("Result: ", result); // Undefined

function addTwoNumbers(number1, number2){ // called as parameters in () as naming conventions
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(2,5)

// console.log("Result: ", result);

function loginUserMessage(username){   //or function loginUserMessage(username = "Sam") to avoid undefined values while executing
    if(username === undefined){    // or if(!username)
        // console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Deepak"))
// console.log(loginUserMessage()); //undefined username

// While making e-commerce application where user adds n no. of products to the cart 
// and we are not sure how much no. comes under Add to cart (parameters are unknown)

function calculateCartPrice(...num1){    // ... acts as a rest and spread operator both depends upon the use case
    return num1
}

//console.log(calculateCartPrice(200, 400, 500))

const user = {         //created an object
    username: "Deepak",
    price: 200       
}

// Object inside a function
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({               // object can be passed directly
    username: "Pandey",
    price: 400
})

// We can also pass Array in the function

const myNewArray = [20, 40, 60, 80]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))