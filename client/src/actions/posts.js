import * as api from '../api';

// action creators = functions that return an action (an object that has a type and a payload)
// use redux thunk here since this is asynchronous
export const getPosts = () => async (dispatch) => {
    
    try {
        const { data } = await api.fetchPosts();

        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}