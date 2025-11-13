// Immediately Invoked Function Expressions (IIFE)

(function chai(){    //Named IIFE
    console.log(`DB Connected`);
})();

// ()()  first one is function def. and second one is execution

(() => {            //Only IIFE
    console.log(`DB Connected Two`)
})();

((name) => {            //Only IIFE
    console.log(`DB Connected Two ${name}`)
})("Deepak")