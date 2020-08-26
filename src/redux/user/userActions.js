import axios from 'axios';
import userActionTypes from './userTypes';

export const fetchUser = (user) => {
  return async (dispatch) => {
    dispatch(fetchUserStart());
    axios
      .get(`https://api.github.com/users/${user}/repos`)
      .then((response) => {
        dispatch(fetchUserSuccess(response.data));
      })
      .catch((error) => dispatch(fetchUserError(error.message)));
  };
};

const fetchUserStart = () => ({
  type: userActionTypes.FETCH_USER_START,
});

const fetchUserSuccess = (data) => ({
  type: userActionTypes.FETCH_USER_SUCCESS,
  payload: data,
});

const fetchUserError = (error) => ({
  type: userActionTypes.FETCH_USER_ERROR,
  payload: error,
});
