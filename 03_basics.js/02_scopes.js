// let a=10;
// const b=20   global scope
// var c=30
let a= 300
if(true){
    let a=10
    const b=20
    var c=30
    // console.log("INNer",a)//block level scope
}

// console.log(a);  //not defined
// console.log(b);  not defined
// console.log(c);


//global sccope is different in coding environment and  in console  (by inspect in browser)
 



function one(){
    const username="Ekjot"


    function two(){
        const website="youtube"
        // console.log(username);//    demonstrates closure  thoda bahut parent ke  variable ko use kiya hai child  variabble ne
    }
    // console.log(website);
    two() 
}
one()

// for every function call stack banta hai
if(true){
    const username="Ekjot"
    if(username==="Ekjot"){
        const website="netflix"
        // console.log(username+ " " + website);
    }
    // console.log(website);
}

// console.log(username);



// ++++++++++++++++++++interesting+++++++++++++++++++++



// function addone(num){
//     return num+1
// }
addone(5)
function addone(num){
    return num+1
}



// const addTwo=function(num){
//     return num+2
// }

addTwo(5)
const addTwo=function(num){                 //hoisting   //ReferenceError: Cannot access 'addTwo' before initialization
    return num+2
}


