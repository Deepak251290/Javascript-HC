// for of 

// ["", "", ""]
// ({}, {}, {})

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
    
}

const greetings = "Hello JS"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
    
}

// Maps

const map = new Map()
map.set("IN", "India")
map.set("FR", "France")
map.set("IN", "India")   // Will not be executed as map stores unique values and in sequence

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ":-", value);
    
}

const myObj = {
    'game1': 'NFS',
    'game2': 'SPY'

}

// for (const [key, value] of myObj) {    // not working TypeError: myObj is not iterable
//     console.log(key, ':-', value);
    
// }