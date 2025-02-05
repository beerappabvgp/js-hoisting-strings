const fetchUserData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const feed = ["user1","user2","user3"];
            resolve(feed);
            // reject("Due to network issue I could not get the data ... ");
        }, 2000);
    });
}
const fetchPostData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const feed = ["post1","post2","post3"];
            resolve(feed);
            // reject("Due to network issue I could not get the data ... ");
        }, 2000);
    });
}
const fetchCommentsData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const feed = ["comment1","comment2","comment3"];
            resolve(feed);
            // reject("Due to network issue I could not get the data ... ");
        }, 2000);
    });
}

fetchUserData()
.then((user) => {
    console.log(user);
    return fetchPostData();
})
.then((post) => {
    console.log(post);
    return fetchCommentsData();
})
.then((comments) => {
    console.log(comments);
})
.then(() => {
    console.log("The prevoius promise was successful ... ");
})
.catch((err) => {
    console.log(err);
}) 



// fetchData()
// .then((feed) => {
//     console.log(feed);
// })
// .catch((err) => {
//     console.log(err);
// });




// onst main = () => {
    // get the user data
//     console.log("start of the main code ... ");
//     getUserData((users) => {
//         console.log(users);
//         getPostData(1, (posts) => {
//             console.log(posts);
//             getCommentsData(1, (comments) => {
//                 console.log(comments);
//             });
//         });
//     });
//     console.log("End of the main code ... ");
// }
