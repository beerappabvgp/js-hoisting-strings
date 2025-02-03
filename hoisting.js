// hoisting 

console.log(a);
var a = 10;


// console.log(user);
// var user = {
//     name: "ganesh"
// };
// console.log(user);

// under the hood
// var user = undefined;
// console.log(user);
// user = {
// name: "ganesh"
// }
// console.log(user);

// under the hood 

// var a = undefined;
// console.log(a);


console.log(num);
var num = 90;

// under the hood

// let num; // TDZ
// console.log(num)
// num = 90


greet("ganesh");
// console.log(greet);

const newGreet = greet(name);

// under the hood
// var greet = undefined;
// console.log(greet("names"));
// greet = (name) => {
//     console.log(`Welcome, ${name}`);
// }

// function greet(name) {
//     console.log(`Welcome, ${name}`);
// }

// under the hood

// function greet(name) {
//     console.log(`Welcome, ${name}`);
// }
// greet('ganesh');

