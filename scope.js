let userName = "Bharath";
console.log(userName);
let res = "global scope";
const add = (num1, num2) => {
    let res = num1 + num2;
    console.log("res in add function: ", res);
    return res;
}

if (true) {
    const blockScopedVariable = "This is block scoped variable ... ";
    console.log("true ... ")
}

// console.log(blockScopedVariable);

console.log(res);

let sum = add(2,3);
console.log(sum);


// global scope
// function scope
// block scope
// lexical scope in js
let taskDetails = "Fetch the data";
let taskTwoDetails = "Fetch the data for task two";
const task1 = () => {
    // let taskTwoDetails = "Fetch the data for task two";
    // let taskDetails = "Fetch the data";
    const task2 = () => {
        // let taskTwoDetails = "Fetch the data for task two";
        console.log(taskDetails);
        const task3 = () => {
            console.log("inside task3: ", taskTwoDetails);
        }
        task3();
    }
    task2();
}


task1();