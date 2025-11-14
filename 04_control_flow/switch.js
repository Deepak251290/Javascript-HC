// switch(key){
//     case value:

//     break;

//     default:

//     break;
// }

const month = 3  // we can also use string here in place of a number

switch(month){
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("Mar");
        break;   // Used break otherwise the next console log will be executed
    default:
        console.log("default value");
    
}