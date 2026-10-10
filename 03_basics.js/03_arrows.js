const user={
    username:"ekjot",
    price:899,

    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`)
        // console.log(this);// current context ki baat karta hai
    }
}//this take current context of t
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()
// console.log(this); 

// function chai(){
//     console.log(this.username);//undefined
// } 

// chai()



//  const chai=function(){
//     let username="ekjot"
//     console.log(this.username);//undefined
// } 

// chai()



const chai=()=>{
    let username="ekjot"
    console.log(this);//{}
    console.log(this.username);//undefined

} 

// chai()


// arrow function

// const addTwo=(num1,num2)=>{
//     return num1+num2  // explicit return
// }

// console.log(addTwo(3,5))

// const addTwo=(num1,num2)=>num1+num2  //implicit return


// const addTwo=(num1,num2)=>(num1+num2)    implicit return
const addTwo=(num1,num2)=>({username:"hitesh"})
console.log(addTwo(3,5))


// const myArray=[1,2,3,4,5]

// myArray.forEach()   in loops





