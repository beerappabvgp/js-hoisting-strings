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

// await can only be used inside of async functions

const greet = () => {
    console.log("welcome .. ");
}

const data = () => {
    return new Promise((resolve, reject) => {
        reject("This is for testing ... ");
    });
}

const linkedFeed = async () => {
    try {
        const users = await fetchUserData();
        const posts = await fetchPostData();
        const comments = await fetchCommentsData();
        console.log(users);
        console.log(posts);
        console.log(comments);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("executes regardless of try and catch ... ");
    }
}

linkedFeed();

// try catch block

