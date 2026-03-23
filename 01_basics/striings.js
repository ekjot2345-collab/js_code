const name="ekjot"
const repoCount=100

// console.log(name+repoCount+" value")//ekjot100 value


console.log(`my name is ${name.toUpperCase()} ${'singh'.toUpperCase()} and my repo count is  ${repoCount}`);

const gameName=new String("chess-is-fav-game")
console.log(gameName[0]);
console.log(typeof gameName);//object
console.log(gameName.__proto__);//    {}

// console.log(gameName.length );
// console.log(gameName.toUpperCase());   //not  change in original string
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('s'));

// const anotherGame=gameName.substring(0,3)  //substring(startindex,endindex) endindex is not included
// console.log(anotherGame);


// const anotherGame=gameName.substring(-8,3)  //substring(startindex,endindex) endindex is not included
// console.log(anotherGame);// it will start from 0 in substring use frak  nhi padta  agr  negative starting index hai


// const anorGame=gameName.slice(-4,3)  //substring(startindex,endindex) endindex is not included
// console.log(anorGame);


// const anotherGame1=" \n\n hitesh   " 
// console.log(anotherGame1);
// console.log(anotherGame1.trim());     removes spaces + line terminators from beginning and end  of the string



const url="https://www.youtube.com/hitesh%20choudhary"//browser converts spaces to %20
url.replace('%20','--')
console.log(url.replace('%20','-'));
console.log(url); //string is immutable in js so it will not change the original string url but it will return a new string with the replaced value



console.log(url.includes('hitesh')); // check whether present in url
console.log(gameName.split('-')); //['chess]
//now output will be an array of string split by -  ['chess','is','fav','game']
//  .split(separator) only works if the separator exists in the string.
// 👉 \x → small
// 👉 \u → bigger
// 👉 \u{} → unlimited 🔥