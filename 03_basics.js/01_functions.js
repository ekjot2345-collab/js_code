// function sayMyName(){
//     console.log("B");
//     console.log("L");
//     console.log("a");
//     console.log("c");
//     console.log("k");

// }

// // sayMyName()


function addTwoNumbers(num1,num2) //in definition there are paremeters 
{
    console.log(num1+num2);
    
}

// addTwoNumbers(2,3) // these are arguments when calling a function
// addTwoNumbers(3,"5")
// addTwoNumbers(3,'a')
const result=addTwoNumbers(3,null)

console.log("result: ", result)//result: undefined because it only printing value
//not returning any value 

// function addTwoNumbers(num1,num2) //in definition there are paremeters
// {

//     // let result=num1+num2;
//     // return result;    both results are different because of sccope of the variable result


//     // return num1+num2;
//     console.log("hello");//unreachable code because return ke baad kuch print nhi hota
// }
// const result2=addTwoNumbers(3,null)

// console.log("result: ", result2)// now return is used


// function loginUserMessage(username1){
//     if(username1===undefined){  //or if(!username) 
//         console.log("please enter a username");
//         return;
//     }
//     return `${username1} just logged  in`;
// }

// // console.log(loginUserMessage("hitesh")) ;
// // console.log(loginUserMessage());//username is not passed
// // this will not print anything because it is not console logged or stored in a variable


// function calculateCartPrice(val1,val2, ...num1){//rest operator is used to take multiple arguments and store them in an array
//     return num1;
// }

// console.log(calculateCartPrice(200,105,505))



// const user={
//     username:"hitesh",
//     price:199 
// }

// function handleObject(anyobject){
//     console.log(`username is ${anyobject.username} and price  is ${anyobject.price}`);
//     //undefined will be printed if the property is not present in the object
// }

// // handleObject(user)

// handleObject({
//     username:"sam",
//     price:565
// })

// const myNewArray=[100,200,300]

// function returnSecondValue(getArray){
//     return getArray[1];
// }

// // console.log(returnSecondValue(myNewArray))

// console.log(returnSecondValue([100,250,300]))
