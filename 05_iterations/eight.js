// reduce() method
// The reduce() method executes a callback function on each array element and combines the elements into a single accumulated result.

//accumulator (acc) → Stores the accumulated result.
// currentValue (curr) → Current array element.
// initialValue → Starting value of the accumulator.

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)



//Using reduce() with an arrow function
const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0)
console.log(myTotal);



//reduce() with an array of objects
// We can use reduce() to calculate the total price of products in a shopping cart.
const shoppingCart = [
    {
        itemName : "js Course",
        price: 299
    },
    {
        itemName : "Python Course",
        price: 399
    },
    {
        itemName : "Data science Course",
        price: 12299
    }
] 

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price,  0)

console.log(priceToPay);
