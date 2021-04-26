export default (posts = [], action) => {
    switch (action.type) {
        // if post._id is equal to the action.payload (the updated post), then return the action.payload
        // which is the newly updated post. otherwise, return the post in its original form without any updates
        case 'UPDATE':
        case 'LIKE':
            return posts.map((post) => post._id === action.payload._id ? action.payload : post)
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];    
        // if the post._id is not equal to the action.payload, remove it 
        case 'DELETE':
            return posts.filter((post) => post._id !== action.payload);
        default:
            return posts;
    }
}