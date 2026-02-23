                                               //stack and heap memory//
//Stack memory is used for storing primitive data types and function calls, while heap memory is used for storing non-primitive data types like objects and arrays.

let myYoutubename="hitesh choudhary"
let  anothername=myYoutubename
anothername="chai aur code"

console.log(myYoutubename);
console.log(anothername);


let userOne={
    email:"ekjot864@gmail.com",
    upi:"448484848@oksbi"
}

let userTwo=userOne
userTwo.email="hitesh@google.com"



console.log(userOne.email) //ekjot864@gmail.com❌
//hitesh@google.com

console.log(userTwo.email)
//hitesh@google.com
