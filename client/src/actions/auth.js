import { AUTH } from '../constants/actionTypes';
import * as api from '../api';


export const signIn = (formData, history) => async (dispatch) => {
    
    try {
        //log the user in
        history.push('/')

    } catch (error) {
        console.log(error);
    }
}

export const signUp = (formData, history) => async (dispatch) => {
    
    try {
        // sign the user up
        history.push('/')

    } catch (error) {
        console.log(error);
    }
}