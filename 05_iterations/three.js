// for...of 
// The for...of loop is used to iterate over the values of an iterable, such as arrays, strings, and Maps.

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}


//Iterating over a string
const greetings = "Hello World"

for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}


// Maps
// A Map is a collection of key-value pairs.

// Important features:
// Stores data in key-value pairs.
// Keys must be unique.
// Inserting an existing key updates its value.
// Maintains insertion order.
// Keys can be of any data type.

const map = new Map()
map.set("IN", "Indian")
map.set("USA", "United State of America")
map.set("FR", "France")

console.log(map);

//Iterating over a Map
//We can use for...of with a Map to access its keys and values.
for (const [key, value] of map){
    console.log(key, ":-", value);
}



// This not work on objects
const myObject = {
    "game1" : "NFS",
    "game2" : "GTA"
}

// This causes a TypeError
for (const [key, value] of myObject){
    console.log(key, ":-", value);
}
//Ordinary JavaScript objects are not iterable by default. Therefore, we cannot directly use for...of on them.