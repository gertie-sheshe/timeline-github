const INITIAL_STATE = {
   user: 'Test User'
}
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      default:
        return state;
    }
}

export default userReducer;
