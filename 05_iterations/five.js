// forEach()Method
//forEach() is an array method used to execute a callback function once for each element of an array.

const coding = ["js", "rb", "py", "java", "cpp"]

coding.forEach( function (item) {
    console.log(item);
})

// We can also use an arrow function inside forEach().
coding.forEach( (val) => {
    console.log(val);
})


//We can define a function separately and pass its reference to forEach().
function printMe(item){
    console.log(item);
}

coding.forEach(printMe)



//forEach() callback parameters
// The forEach() callback can receive three parameters:
// item → Current element.
// index → Index of the current element.
// arr → Original array being traversed.

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);  
})




// forEach() with an array of objects
//We can use forEach() to access properties inside objects stored in an array.

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})

