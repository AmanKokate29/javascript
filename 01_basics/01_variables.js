// const: Used to declare a variable whose value cannot be reassigned/changed.
// accountId is assigned the value 101.
const accountId = 101;


// let: Used to declare a variable whose value can be changed/reassigned later.
// accountEmail is assigned an email address.
let accountEmail = "aman@gmail.com";


// var: Used to declare a variable that can be redeclared and reassigned.
// It is the older way of declaring variables in JavaScript.
var accountPassword = "12345";


// console.log(): Displays values in the console on a single line.
console.log(accountId, accountEmail, accountPassword);


// console.table(): Displays data in a table format in the console.
// An array [] is used to pass multiple values to the table.
console.table([accountId, accountEmail, accountPassword]);


//Example:- 
let age = 21;
age = 22; //Allowed: the value can be changed/reassign.


//const city = "pune";
//city = "Mumbai"; //Error: cannot reassign a const variable.

// We avoid "var" in modern javascript because its function-scoped behaviour can cause unexpected results.

