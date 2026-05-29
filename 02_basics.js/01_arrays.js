//ARRAY

const myArry=[1,2,4,89,58]
const myFavSingers=["Arijit Singh","Shreya Ghoshal","DILJIT DOSANJH","Neha Kakkar","Atif Aslam"]

//PROTOTYPE JUST REMBER IN ARRAY PROPERTY 

const myArr2=new Array(1,2,3,4,50)
console.log(myArry[3])
console.log(myFavSingers[2])



//ARRAY METTHODS

//  myArr2.push(60)
// myArr2.push(70)
// myArr2.pop()
    // myArr2.unshift(0)  //need to shift all the values to right and add 0 at the start of the array
    // myArr2.shift()


// console.log(myArr2);
// console.log(myArr2.length)


//  console.log(myArr2.indexOf(8))//-1


// console.log(myArr2.includes(4))


const newArr=myArr2.join()
console.log(newArr)
console.log(typeof newArr);


//slice,spice
const myn1= myArry.slice(1,3) //it will not change the original array
console.log(myn1)
console.log("b",myArry )

const myn2=myArry.splice(1,3) //it will change the original array
console.log(myn2)
console.log( "c",myArry)


