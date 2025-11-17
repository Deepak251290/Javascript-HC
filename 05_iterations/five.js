const coding = ["js", "java", "python", "cpp"]

// coding.forEach (function (val){   //callback function
//     console.log(val);
    
// })


// We can use arroe function as well

coding.forEach( (item) => {
    // console.log(item);
    
} )

function printMe(item){
    // console.log(item);
    
}

coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
    
} )

//Objects in array
const myCoding = [
    {
        languageName: "javascript",
        languageFile: "JS"
    },
     {
        languageName: "java",
        languageFile: "JAVA"
    },
     {
        languageName: "python",
        languageFile: "PY"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    
} )