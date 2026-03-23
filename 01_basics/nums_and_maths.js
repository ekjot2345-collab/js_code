const score=500
console.log(score);


const balance=new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));  //100.0   

const otherNumber=123.5678
console.log(otherNumber.toPrecision(3));  //123

const hundreds=1000000
console.log(hundreds.toExponential())
console.log(hundreds.toLocaleString('en-IN'));  //10,00,000 
//if 'en-US' then 1,000,000
 

//+++++++++++++++++++++++Maths+++++++++++++++++++++++//

// console.log(Math.PI);
// console.log(Math.abs(-90));
// console.log(Math.round(4.6));  //5
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));

console.log(Math.random());  //0 to 1
console.log(Math.floor((Math.random()*10)+1));  
 
const min=10
const max=5
console.log((Math.floor(Math.random()*(max-min+1))+min));