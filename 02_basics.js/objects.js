// const a = {};
// const b = {};

// console.log(a === b); // false

// because every ####object literal## creates a new object.


//Whereas singleton means:
// const a = getInstance();
// const b = getInstance();

// console.log(a === b); // true

///because both variables receive the same object.

const mySym=Symbol("key1")

const JsEkjot={
    name:"Ekjot Singh",   // we can also define keys in object
    age:25,
    location:"san francisco",
    "fullname":"Ekjot Singh",
    mySym:"key1"
}
console.log(JsEkjot.name)
console.log(JsEkjot.age)
console.log(JsEkjot["location"])
console.log(JsEkjot["fullname"])// we can access the keys with dot notation or with bracket notation
// we can access this full name through only bracket notation
//  because it has doubouble quotes while intializing in the object.
console.log(JsEkjot.mySym) // this will print key1 because we have defined mySym as a key in the object