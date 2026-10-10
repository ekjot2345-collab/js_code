//if
// const isUserLoggedIn=true
// if(isUserLoggedIn){
//     console.log("show signout button");
// }  

// if(2=='2'){
//     console.log("condition is true");
// }


// === compare datatypes also
// if(2==='2'){
//     console.log("condition is TRUE")
// }
// else{
//     console.log("condition is FALSE")
// }


// <,>,<=,>=,==,!=,===

// const score=456
// if(score<156){
//     const power="fly"
//     console.log(`user power:${power}`);
// }
// console.log(`user power:${power}`);//Referencerror because power is defined in if block so it is not accessible outside the block



// const balance =1000
// // if(balance>500) console.log("you are rich"),console.log("you are elon musk");


// if(balance<500){
//     console.log("less than 500");
// } else if (balance<1000){
//     console.log("less than 1000");
// } else if(balance<1500){
//     console.log("less than 1500");
// }







const userLoggedIn=true
const debitCard=true
const loggedInFromGoogle=true

if(userLoggedIn && debitCard && 2==3){
    console.log("User can make a purchase");
}

if(userLoggedIn ||  loggedInFromGoogle){
    console.log("Purchase successful");

}