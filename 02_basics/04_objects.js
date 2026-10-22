// 1. Creating Objects

// Creates an object using the Object constructor
// const tinderUser = new Object();

// Creates an empty object using object literal syntax
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Raj";
tinderUser.isLoggedIn = false;

console.log(tinderUser);
// { id: '123abc', name: 'Raj', isLoggedIn: false }


// 2. Nested Objects
// An object can contain another object.

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "aman",
            lastname: "kokate"
        }
    }
};

// Accessing a deeply nested property
console.log(regularUser.fullname.userfullname.firstname);
// aman


// 3. Combining Objects

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// This creates a nested object, not a merged object
// const obj3 = { obj1, obj2 };

// Object.assign() combines properties into a target object
// const obj3 = Object.assign({}, obj1, obj2);

// Spread syntax combines properties into a new object
const obj3 = { ...obj1, ...obj2 };

console.log(obj3);
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


// 4. Array of Objects
// Useful when storing multiple users or records.

const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    },
    {
        id: 3,
        email: "c@gmail.com"
    },
    {
        id: 4,
        email: "d@gmail.com"
    }
];

// Accessing the second user's email
console.log(users[1].email);
// b@gmail.com


// 5. Object.keys()
// Returns an array containing an object's own enumerable property keys.

console.log(Object.keys(tinderUser));
// [ 'id', 'name', 'isLoggedIn' ]


// 6. Object.values()
// Returns an array containing an object's property values.

console.log(Object.values(tinderUser));
// [ '123abc', 'Raj', false ]


// 7. Object.entries()
// Returns an array of [key, value] pairs.

console.log(Object.entries(tinderUser));
// [
//   [ 'id', '123abc' ],
//   [ 'name', 'Raj' ],
//   [ 'isLoggedIn', false ]
// ]


// 8. hasOwnProperty()
// Checks whether an object has a particular own property.

console.log(tinderUser.hasOwnProperty("isLoggedIn"));
// true

console.log(tinderUser.hasOwnProperty("age"));
// false





// Object Destructuring

const course = {
    coursename: "JavaScript",
    price: "1000",
    courseInstructor: "aman"
};

// Extracting a property into a variable
const { courseInstructor } = course;

console.log(courseInstructor);
// Output: aman


// Renaming a property while destructuring
const { courseInstructor: instructor } = course;

console.log(instructor);
// Output: aman
