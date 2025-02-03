// function 

// It takes some data as input
// process the data 
// returns the result 

// function add(num1, num2) {
//     let res = num1 + num2;
//     // console.log(res);
//     return res;
// }

// // caller
// console.log("The sum of two numbers is : ", add(2, 3));
// console.log("The sum of two numbers is : ", add(100, 200));
// console.log("The sum of two numbers is : ", add(1000, 2000));


// function add(num1, num2) {
//         let res = num1 + num2;
//         // console.log(res);
//         return res;
//     }
    

// arrow functions
// function expression
const add = (num1, num2) => {
    let res = num1 + num2;
    return res;
    // console.log("res: ",res);
}

console.log("The variable add is: ", add);

console.log("The sum of two numbers is : ", add(20,20));

// anonymous functions
// function (name) {
//     console.log("Hi there!!", name);
// }
const greet = function (name) {
    console.log("Hi there!!", name);
}
greet("Ganesh");

const sub = function subtract(num1, num2) {
    return num2 - num1;
}

console.log(sub(100, 200));



// IIFE


(function () {
    console.log("This is IIFE ... ");
})();


let num1 = 20;
let num2 = 20;

const res = (function (num1 , num2) {
    let res =  num1 * num2;
    // console.log("The multiplication of two numbers is: ", res);
    return res;
})(num1, num2);

console.log(add(res, res));

// res(34, 34);

// console.log(object)

console.log("The res is: ", res);

console.log(add(200, 300));