const INITIAL_STATE = {
  userData: null,
  error: null
}
const userReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case 'FETCH_USER_SUCCESS':
      return {
        ...state,
        userData: action.payload
      }
    case 'FETCH_USER_ERROR':
      return {
        ...state,
        userData: null,
        error: action.payload
      }
      default:
        return state;
    }
}

export default userReducer;
