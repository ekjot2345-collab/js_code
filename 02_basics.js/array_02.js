const marvel_heroes=["ironman","thor","hulk"]
const dc_heroes=["superman","batman","flash"]

// marvel_heroes.push(dc_heroes)


// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

const allHeroes = marvel_heroes.concat(dc_heroes);

console.log(allHeroes);
// Same clean 


// Method,Does it change the original array?,Explanation
// push(),Yes,Modifies the original array
// concat(),No,"Returns a new array, original remains unchanged"

const allHeoes2=[...marvel_heroes,...dc_heroes,..."spiderman"] //spread operator
console.log(allHeoes2);



const another_array=[1,2,3,[4,5,6],7,[6,[7,[8,9],9],[8,9,10]]]
const flat_array=another_array.flat(1) //it will flatten the array upto 2 
// levels
console.log(flat_array);//[ 1, 2, 3, 4, 5, 6, 7, 6, [ 7, [ 8, 9 ], 9 ], [ 8, 9, 10 ] ]   // only first level flattened
[ 1,  2, 3, 4, 5, 6,  7, 6, 7, 8, 9, 10 ]  // fully flattened 









// console.log(Array.isArray(marvel_heroes))//true
// console.log(Array.isArray("hello"))//false

console.log(Array.from("hello"))//[ 'h', 'e', 'l', 'l', 'o' ]
console.log(Array.from({name:"ekjot"}));//intrestinng




let score1=100
let score2=280
let score3=459
console.log(Array.of(score1,score2,score3))//[ 100, 280, 459 ]