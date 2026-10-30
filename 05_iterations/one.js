// for
//A for loop is used to execute a block of code repeatedly until the given condition becomes false.

for (let i = 0; i <= 10; i++){
    const element = i;
    if (element == 2) {
        console.log("2 is the best number");
        
    }
    console.log(element);
       
}



//A loop inside another loop is called a nested loop.

for (let i = 0; i<=10; i++){
    console.log(`Outer loop value: ${i}`);
    
    for (let j = 0; j<=10; j++){
        console.log(`Inner loop value: ${j} and inner loop ${i}`);

    }

}



//Accessing array elements using for loop
let myArray = ["Batman", "Superman", "Flash"]

for (let i = 0; i < myArray.length; i++){
    const element = myArray[i]
    console.log(element);
    
}




// Break and continue

//Break immediately terminates the entire loop.
for (let i = 0; i <= 20; i++){
    if (i == 7){
        console.log(`Detected 7`);
        break  
    }
    console.log(`Value of i is ${i}`);
}


//Continue skips the current iteration and moves to the next iteration.
for (let i = 0; i <= 20; i++){
    if (i == 7){
        console.log(`Detected 7`);
        continue
    }
    console.log(`Value of i is ${i}`);
}