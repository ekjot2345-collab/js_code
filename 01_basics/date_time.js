 let myDate=new Date()
 console.log(myDate.toString());
 console.log(myDate.getDate());
 console.log(myDate.toDateString());
 console.log(myDate.toLocaleString());
 console.log(typeof myDate)//object


//  let myCreatedDate=new Date(2026,2,25,5,3,9)  Wed Mar 25 2026 05:03:09 GMT+0530 (India Standard Time)
let myCreatedDate=new Date("2025-01-14")
//  console.log(myCreatedDate.toString());




// let myTimeStamp=Date.now()  //calculates milliseconds from 1 Jan 1970 to current date and time
// console.log(myTimeStamp);

// let start = Date.now();

// // some code

// let end = Date.now();

// console.log(end - start); // time taken in ms




let mytimestamp=Date.now()
console.log(mytimestamp);



console.log(myDate.toLocaleString('default',{weekday:'long',year:'numeric',month:'long',day:'numeric'}));

