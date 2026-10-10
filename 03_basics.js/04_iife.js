//Immediately Invoked Function Expression (IIFE) is a function that runs as soon as it is defined.
(function chai(){
    //named iife
    console.log('DB CONNECTED');
})();// ';' for end  otherwise TypeError 
// chai()

// ()//for function definiton 
// ()//for execution

//iife 1.) jo immediately execute ho jaye
// 2.)jo global scope ko pollute na kare


// (()=>{
//     console.log("db connected");
// }


((name)=>{
    //unnamed iife
    console.log(`db connected ${name}`);
}

)('ekjot')//argument pass kiya hai


// function vansh(){
//     console.log("vansh");
// }

// vansh()



