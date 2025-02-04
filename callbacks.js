// const task1 = () => {
//     console.log("task1 ... ");
//     const task2 = () => {
//         console.log("task2 ... ");
//         const task3 = () => {
//             console.log("task3 ... ");
//         }
//         task3();
//     }
//     task2();
// }
// task1();



// synchronous code 
// let userName = "anil";
// console.log("first log ... ")
// console.log("second log ... ")
// console.log("third log ... ")
// console.log("fourth log ... ")

// Asynchronous code 

// console.log("start of async code ... ");

// setTimeout(() => {
//     console.log("After timeout this callback has been invoked ... ");
// }, 2000);

// console.log("end of async code ... ");



// // callbacks


// // passing a function as an argument to another function 

// const task1 = (cb) => {
//     console.log(cb);
//     console.log("Inside of task1 : ");
//     cb("ganesh ... "); // function invocation 
// }
// task1(greet);

// const add = (num1, num2) => {
//     console.log(num1 + num2);
// }
// let n1 = 2;
// let n2 = 3;
// add(n1, n2);

// const greet = (userName) => {
//     console.log(`Welcome, ${userName}`);
// }

// task1(greet);

// const fetchData = (cb) =>  {
//     setTimeout(() => {
//         const users = ["user1", "user2", "user3"];
//         cb(users);
//     }, 4000);
// }

// const taskOneHandler = (res) => {
//     console.log("The res is: ", res);
// }


// fetchData(taskOneHandler);


// users data
// get the posts of data 
// get all the comments on the post 


const getUserData = (cb) => {
    setTimeout(() => {
        const user = {
            name: "anil",
            profilePic: "https://image.com/",
            postIds: [1,2,3,4],
        }
        cb(user);
    }, 2000);
}

const getPostData = (postId, cb) => {
    setTimeout(() => {
        const post = {
            postId: postId,
            content: "This is post1",
            likes: 34,
            commentIds: [100,200,300,400],
        };
        cb(post);
    }, 2000);
}

const getCommentsData = (commentId, cb) => {
    setTimeout(() => {
        const comment = {
            postId: 1,
            data: "This was commented on post1"
        };
        cb(comment);
    }, 2000);
}

const main = () => {
    // get the user data
    console.log("start of the main code ... ");
    getUserData((users) => {
        console.log(users);
        getPostData(1, (posts) => {
            console.log(posts);
            getCommentsData(1, (comments) => {
                console.log(comments);
            });
        });
    });
    console.log("End of the main code ... ");
}

main();