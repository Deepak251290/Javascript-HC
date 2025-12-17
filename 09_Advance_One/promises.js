const promiseOne = new Promise(function(resolve, reject) {
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){    // Consume the promise -- .then has a direct relation with resolve
    console.log('Promise consumed');
    
}) 

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
    }, 1000)
    
}).then(function(){
    console.log('Async 2 resolved');
    
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true    // let error = false
        if(!error) {
            resolve({username: "deepak", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
    
}).then((username) => {
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(() => console.log("The promise is either resolved or rejected")
)

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true  // let error = false
        if(!error) {
            resolve({username: "JS", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})
// using async await
async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch(error) {
        console.log(error);    //error handled gracefully
        
    }
    
}

consumePromiseFive()

// async function getAllUsers(){
//    try{
//      const response = await fetch('https://jsonplaceholder.typicode.com/users')
//      const data = await response.json()
//      console.log(data);
//    } catch(error) {
//     console.log("E: ", error);
//    }  
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error)
)