// if

if(true){
    // code executes
}
else{
    //  other code executes
}

if(false){
    // code doesn't executes
}

//  <, >, <=, >=, ==, !=, ===, !==

// scope dicsussion

// const score = 200

// if(score>100){
//     const power = "fly"
//     console.log(`User power: ${power}`);
    
// }
// console.log(`User power: ${power}`);  // O/P - power is not defined due to scope


const userLoggedIn = true
const debitCard = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
    
}

// for OR we use ||