// Simulated asynchronous function to fetch user posts
function fetchUserPosts(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulated posts data
            const userPosts = [
                { id: 1, userId, content: 'Hello World!' },
                { id: 2, userId, content: 'Learning Promise Chains' },
            ];
            resolve(userPosts);
        }, 1000); // Simulates network delay
    });
}

// Function to process the posts
function processPosts(posts) {
    return new Promise((resolve) => {
        const processedPosts = posts.map(post => ({
            ...post,
            content: post.content.toUpperCase(), // Transforming content to uppercase
        }));
        resolve(processedPosts);
    });
}

// Promise chain to fetch user data, posts, and process them
fetchUserData(1)
    .then(user => {
        console.log('User Data:', user);
        return fetchUserPosts(user.id); // Fetch posts based on user ID
    })
    .then(posts => {
        console.log('User Posts:', posts);
        return processPosts(posts); // Process the fetched posts
    })
    .then(processedPosts => {
        console.log('Processed Posts:', processedPosts);
    })
    .catch(error => {
        console.error('Error:', error);
    });
