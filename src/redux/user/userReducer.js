const INITIAL_STATE = {
  userData: null,
  homePage: true,
  fetching: false,
  error: null,
};
const userReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case 'FETCH_USER_SUCCESS':
      return {
        ...state,
        userData: action.payload,
        error: null,
        fetching: null,
        homePage: false,
      };
    case 'FETCH_USER_ERROR':
      return {
        ...state,
        userData: null,
        fetching: null,
        error: action.payload,
      };
    case 'FETCH_USER_START':
      return {
        ...state,
        fetching: true,
        error: null,
        userData: null,
      };
    default:
      return state;
  }
};

export default userReducer;
