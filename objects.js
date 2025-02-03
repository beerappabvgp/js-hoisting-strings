// a collection of key value pairs 

// declare objects in javascript 

let address = {
    state: "AP",
    pincode: 517408,
    doorNumber: "6-9",
    street: "Gandhi street"
}

const user = {
    username: "Ganesh",
    age: 23,
    contactNumber: 7993873246,
    email: "bharath@gmail.com",
    address: address
}

for (const key in user) {
    console.log(`${key} = `, user[key]);
}

// console.log(user);

// delete user.address.doorNumber;
// console.log("after deletion: ", user);

// user.address.state = "EN";
// console.log("after updating state ... ", user);


// console.log("user", user);

// console.log(user);

// // CRUD operations 


// // Read the data in the object 


// console.log("The username is: ", user.username);
// console.log("The age of the user is: ", user.age);

// // console.log("The username is : " , user["username"]);
// // console.log("The age of the user is : ", user["age"]);


// // Updating the data

// user.email = "ganesh@gmail.com";

// console.log("After updating the email ... ", user);

// user.height = 5.8;

// console.log("user after adding height: ", user);

// user.height = 10;
// console.log("user after updating height ...", user);


