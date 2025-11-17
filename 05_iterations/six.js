const coding = ["js", "java", "python"]

const values = coding.forEach( (item) => {
    console.log(item);
    return item   // for each loop doesn't return a value
    
})

console.log(values);

// filter function

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter( (num) => num > 4)
console.log(newNums);


// map function
// chaining - multiple functions while callback map.map.filter
//reduce function