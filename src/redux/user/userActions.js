import userActionTypes from './userTypes';

export const fetchUser = () => { }

const fetchUserStart = () => ({
    type: userActionTypes.FETCH_USER_START
});

const fetchUserSuccess = (data) => ({
    type: userActionTypes.FETCH_USER_SUCCESS,
    payload: data
});

const fetchUserError = (error) => ({
    type: userActionTypes.FETCH_USER_ERROR,
    payload: error
});
