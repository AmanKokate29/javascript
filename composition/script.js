function add(a, b){
    return a + b;
}

function square(val){
    return val * val;
}


function composeTwoFunction(fn1, fn2){
    return function (a,b){
        return fn2(fn1(a, b));
    }
}


const c2f = (fn1, fn2) => (a,b) => fn2(fn1(a,b));

const task = c2f(add, square);

console.log(task(2,3));
