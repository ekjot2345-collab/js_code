// kis trah dat ko memory mein rkha jata hai and access kiya jata hai


// 1. Primitive data types: These are the basic data types that store a single value.
//  They include:

//7 types:string,number,boolean,null,undefined,symbol,BigInt

const score=100
const scoreValue=100.3


const isLoggedIn=true
const outsideTemp=null
let userEmail;
const id =Symbol('123')
const anotherId =Symbol('123')
console.log(id===anotherId) //false because symbol is unique

const bigNumber=BigInt("1234567890123456789012345678901234567890")
console.log(bigNumber)


// 2. Non-primitive data types: These are more complex data types that can store multiple values or collections of data. 
// They include:

//arrays,objects,functions



const heros=["shaktiman","spiderman","batman"]

let myObj={
    name:"ekjot",
    age:18}


const myFunction=function(){
    console.log("hello duniya")
}


console.log(typeof bigNumber) //bigint
console.log(typeof heros)   //object
console.log(typeof outsideTemp) //object
console.log(typeof myObj) //object
console.log(typeof myFunction)


