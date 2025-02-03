// primitive types always copy by value
// non-primitive types always copies by reference


let num = 12;
let numCopy = num;

console.log(num);
console.log(numCopy);

numCopy = 9000;
console.log("============================================");
console.log(num);
console.log(numCopy);


// address in programming 

// 0xa

let num2 = 90; // => 0xa => 90

// let user = "anil"; // 0xs => "anil"


// OXUser
let user = {
    name: "anil",
    age: 23,
}

let userCopy = user;  // userCopy = OXUser

console.log(user);
console.log(userCopy);

console.log("============================");

user.name = "aravind";

console.log(user);
console.log(userCopy);


const arr = [1,2,3];
const arrCopy = arr;
console.log(arr);
console.log(arrCopy);
console.log("===============================");
// arr.pop();
// arr.pop();
console.log(arr);
console.log(arrCopy);