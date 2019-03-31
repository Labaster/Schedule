export default (state={}, action) => {
    if (action.type === 'ADD_USER') {
        const newState = {...state};
        return newState.user = action.payload;
    }
    return state;
};
