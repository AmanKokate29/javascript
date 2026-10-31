// for...in 
// The for...in loop is used to iterate over the enumerable property keys of an object.
const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
}


//We can also use for...in with arrays.
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming){
    console.log(programming[key]);
}


//A Map is iterable using for...of, but for...in does not iterate over its entries.
const map = new Map()
map.set("IN", "Indian")
map.set("USA", "United State of America")
map.set("FR", "France")

for (const key in map){
    console.log(key);
}
//Map entries are not enumerable object properties. Use for...of to iterate over Map entries
