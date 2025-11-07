// Primitive Data Types (Call by Value)
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt


// Non-Primitive Data Types (Call by Reference)
// 1. Object
//    a. Array 
//    b. Function

// *****************************************************************************

// Stack (Primitive Data Types) vs Heap (Non-Primitive Data Types)

let myYoubeChannel = "Deepak Pandey"
let anotherChannel = myYoubeChannel
anotherChannel = "Tech Deepak"

// console.log(myYoubeChannel)
// console.log(anotherChannel);

let myChannel ={
    channelName: "Tech Deepak"
}

let myChannel1 = myChannel
myChannel1.channelName = "Deepak IT"

console.log(myChannel.channelName); 
console.log(myChannel1.channelName); 

