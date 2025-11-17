// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    // console.log(element);
}

// console.log(element); //Not accesible outside the loop(scope concept) and it should be 


// Nested for loop
for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop ${j} and inner loop ${i}`);
        // console.log(i + '*' + j + '=' + i*j);
    }
    
}

// For loop with arrays

let myArr = ["flash", "batman", "superman"]
// console.log(myArr.length);

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element);
    
}

// break and continue

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log("Detected 5");
        break
        
    }
    console.log(`Value of i is ${index}`);
    
    
}
for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log("Detected 5");
        continue     // one time skipped (5 value will not be prited that's it  remaining values will be printed as usual)
        
    }
    console.log(`Value of i is ${index}`);
    
    
}
