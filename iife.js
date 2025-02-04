// iife => immediately 

// const add = (num1, num2) => {
//     return num1 + num2;
// }

// add();


(
    (num1, num2) => {
        console.log(num1 + num2);
    }
)(2, 3);


// anonymous function 

const add = function (num1, num2) {
    return num1 + num2;
}

console.log(add(200,200));