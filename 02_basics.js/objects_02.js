// const tinderUser=new Object()// singleton object

const tinderUser={}//non singleton object

tinderUser.id="123abc"
tinderUser.name="johnny sins"
tinderUser.isLoggedIn=false

// console.log(tinderUser)

const regularUser={
    email:"hitesh@chddgfh.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"singh"
        }
    }
}


// console.log(regularUser.fullname.userfullname.firstname)

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

// const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2)  //(target, source) now  empty object{} will be created


const obj3={...obj1,...obj2}
console.log(obj3)

const users=[
{
    id:1,
    name:"hitesh",
    age:25
},
{
    id:2,
    name:"ekjot",
    age:25
}
]

users[1].id
console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))


console.log(tinderUser.hasOwnProperty("name"))//true