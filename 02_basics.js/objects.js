// const a = {};
// const b = {};

// console.log(a === b); // false

// because every ####object literal## creates a new object.


//Whereas singleton means:                  // constructor
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
    mySym:"krish3",// it is not being used as a symbol
    [mySym]:"myValue" // this is how we can use symbol as a key in the object
}
// console.log(JsEkjot.name)
// console.log(JsEkjot.age)
// console.log(JsEkjot["location"])
// console.log(JsEkjot["fullname"])// we can access the keys with dot notation or with bracket notation
// // we can access this full name through only bracket notation
// //  because it has doubouble quotes while intializing in the object.



// console.log(JsEkjot.mySym) // this will print krish3 because we have defined mySym as a key in the object

// console.log(typeof JsEkjot.mySym) // this will print "string" because the key "mySym" in the object holds the string 'krish3'///string


// console.log(JsEkjot[mySym]) // this will print myValue because we have defined mySym as a symbol key in the object



// console.log(JsEkjot)

JsEkjot.location="India"
// console.log(JsEkjot.location) // this will print "India" because we have changed the value of location key in the object


// Object.freeze(JsEkjot) // this will freeze the object and we cannot change any value in the object

JsEkjot.location="USA" // this will not change the location because the object is frozen
// console.log(JsEkjot.location) // this will print "India" because the object is frozen and we cannot change any value in the object

JsEkjot.grating= function(){
    console.log("hello my baby")
}
console.log(JsEkjot.grating()) //undefined





JsEkjot.greetingTwo = function(){
    console.log(`Hello baby, ${this.name}`);
}
// Hello baby, Ekjot Singh

console.log(JsEkjot.greetingTwo()) //undefined