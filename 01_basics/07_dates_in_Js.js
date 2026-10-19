// ==========================================
// 1. DATES IN JAVASCRIPT
// ==========================================

// Date is a built-in JavaScript object used to
// work with dates and times.

// new Date() creates a Date object representing
// the current date and time.
let myDate = new Date();

// Converts the date and time into a readable string.
console.log(myDate.toString());

// Returns the date in a readable format without the time.
console.log(myDate.toDateString());

// Returns the date and time in a locale-specific format.
console.log(myDate.toLocaleString());

// Date objects have the type "object".
console.log(typeof myDate); // object


// ==========================================
// 2. CREATING A SPECIFIC DATE
// ==========================================

// Syntax: new Date(year, monthIndex, day)
//
// IMPORTANT: Month indexing starts from 0.
// January = 0, February = 1, ..., December = 11.

let myCreatedDate = new Date(2026, 0, 29);

console.log(myCreatedDate.toDateString());
// Thursday, January 29, 2026


// Creating a date with hours and minutes.
// Syntax: new Date(year, monthIndex, day, hours, minutes)

let myCreatedDateTwo = new Date(2026, 0, 29, 5, 3);

console.log(myCreatedDateTwo.toLocaleString());
// Displays January 29, 2026, at 5:03 AM
// Exact formatting depends on your locale and environment.


// ==========================================
// 3. TIMESTAMPS
// ==========================================

// Date.now() returns the current timestamp
// in milliseconds since January 1, 1970, UTC.

let myTimeStamp = Date.now();

console.log(myTimeStamp);
// Example: 1792410000000 (the value changes over time)

// getTime() returns the timestamp of a Date object
// in milliseconds since January 1, 1970, UTC.

console.log(myCreatedDate.getTime());

// Convert milliseconds to seconds.
// Math.floor() removes the fractional part.

console.log(Math.floor(Date.now() / 1000));
// Current Unix timestamp in seconds.


// ==========================================
// 4. GETTING DATE COMPONENTS
// ==========================================

let newDate = new Date();

// Displays the current date and time.
console.log(newDate);

// getMonth() returns the month index from 0 to 11.
// Add 1 to get the month number from 1 to 12.

console.log(newDate.getMonth() + 1);

// getDay() returns the day of the week:
// Sunday = 0, Monday = 1, ..., Saturday = 6.

console.log(newDate.getDay());

// getDate() returns the day of the month from 1 to 31.
console.log(newDate.getDate());

// getFullYear() returns the full year.
console.log(newDate.getFullYear());

// getHours() returns the hour from 0 to 23.
console.log(newDate.getHours());

// getMinutes() returns the minutes from 0 to 59.
console.log(newDate.getMinutes());
