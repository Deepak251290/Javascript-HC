const userEmail = "deepak.pandey" //Got the email Assumed true value
// const userEmail =""               // Assumed false
// const userEmail =[]               // Assumed true

if(userEmail){
    console.log("Got the email");
}
else{
    console.log("Didn't got the email");
    
}

// falsy values
//false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}-empty function

// Nullish coalescing Operator  (??): null undefined  
// how to handle whenever an error occurs

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 15

console.log(val1);

// Terniary Operator

condition ? true : false
