// // It accepts another function as a parameter/argument
// // It returns another function 

// const hof = () => {
//     return () => {
//         console.log("hof function  ... ");
//     }
// }

// const res = hof();
// res();


// setTimeout(() => {}, 1000);


// map

const nums = [1,2,3,4];

const doubles = nums.map((num) => {
    return num * 2;
});


// filter

const even = nums.filter((num) => {
    return num % 2 === 0;
});
// for (let i = 0; i < nums.length; i++) {
//     (nums[i] % 2 === 0) ? even.push(nums[i]) : "";
// }
console.log("even: ", even);

// for (let i = 0; i < nums.length; i++) {
//     doubles.push(nums[i] * 2);
// }

console.log(doubles);

