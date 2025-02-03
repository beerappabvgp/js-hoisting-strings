// // let userName = "Ganesh";
// // let userName = 'Ganesh';

// let userName = `Ganesh`; // GANESH
// console.log(userName);
// // let greet = "Hi there!! ${userName}"
// let greet = `Hi there!! ${userName}`; // hi there!! GANESH
// console.log(greet);

// console.log(greet.toUpperCase());
// console.log(greet.toLowerCase());


// console.log(greet.charAt(0));
// console.log(greet.charAt(1));

// // console.log(object)

// let para = "This is js strings";
// let paraArr = para.split(" ");  // ["This", "is", "js", "strings"];
// for (let i = 0; i < paraArr.length; i++) {
//     if (paraArr[i] === "strings") {
//         paraArr[i] = paraArr[i].toUpperCase();
//     }
// }
// console.log("After modifying ... ", paraArr);
// let newString = paraArr.join(" ");
// console.log(newString);
// console.log(paraArr);


// // "==" and "==="


// // console.log(s1 == s2);
// // console.log(s1 === s2[0]);

// // console.log(typeof Number(45));

// console.log('1' === 1); // === checks the value and also the type of the data
// console.log('1' == 1); // double equals never checks the type of the data


// let para1 = "This is para1"; // uppercase
// let para2 = "This is para2"; // lowercase

// para1 = para1.toUpperCase();
// para2 = para2.toLowerCase();

// let combinedString = para1.concat(para2);
// console.log(combinedString);

// 100

const paras = ["This is para1", "This is para2", "This is para3"]

for (let i = 0; i < paras.length; i++) {
    let para = paras[i]
    let newPara = " " + para;
    paras[i] = newPara;
    console.log(para);
}

console.log(paras);


let para = "This is js for you ... ";

for (const c in para) {
    console.log(para[c]);
}

for (let i = 0; i < para.length; i++) {
    console.log(para[i]);
}