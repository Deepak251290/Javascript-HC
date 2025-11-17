const myObject = {
    js: "Javascript",
    cpp: "C++",
    rb: "ruby"

}

for (const key in myObject) {
    // console.log(key);   //Will print all the keys
    // console.log(myObject[key]); //will print all the values
    
    // console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

const programming = ["java", "python", "cpp"]
for (const key in programming) {
    console.log(key);   //Only index will be printed and not the value in it
    
   console.log(programming[key]); // value will be printed
   
}