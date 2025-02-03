// collection of elements 

const products = ["Item1", "Item2", "Item3", "Item4", "Item5"];
console.log(products);
console.log("products.length", products.length);
const display = (arr) => {
    // for (let i = 0; i < arr.length; i++) {
    //     console.log(arr[i]);
    // }
    // for (const item in arr) {
    //     console.log(arr[item]);
    // }
    // for (const item of arr) {
    //     console.log(item);
    // }
}
console.log("Type of array is: ", typeof([]));
const nums = [1,2,3,4,5];
display(products);
display(nums);

console.log("products: ", products);

// read the data 

console.log(products[0]);
console.log(products[1]);

// update the data

// products[0] = "Item0";
// console.log("after updating ... ", products);

// products.pop();
products.splice(2, 2);
console.log("After deletion : ", products);

// CRUD



const matrix = [
    [1,2,3], // 0
    [4,5,6], // 1
    [7,8,9], // 2
]

// 3x3

// const = [[0, 1, 2], [0, 1 , 2], [0, 1, 2]]
console.log(matrix);
matrix[1][1] = 90000;
console.log(matrix);
matrix[0] = [100, 200, 300];
console.log("updated the matrix ... ", matrix);
// console.log(matrix[0][2]);
// matrix[0][1] = 10000;