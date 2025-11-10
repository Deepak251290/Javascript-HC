const myArray = [10, 20, 30, 40]
// console.log(myArray[2]);

myArray.push(50) // Add an element at the last 
myArray.unshift(0) // Add an element at the start
// Similarly we can use pop and shift to remove an element from last and front respectivrly

console.log("A ", myArray);

 const newArray = myArray.join()
//  console.log(myArray);
//  console.log(newArray);
//  console.log(typeof newArray);
 
//slice and splice

const myn1 = myArray.slice(1,3)

console.log(myn1);
console.log("B ", myArray);

const myn2 = myArray.splice(1,3)
console.log("C ", myArray);
console.log(myn2);



 
