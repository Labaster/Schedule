export default (state={}, action) => {
    if (action.type === 'ADD_USER') {
        const newState = {...state};
        return newState.user = action.payload;
    }
    else if (action.type === 'REMOVE_USER') {
            return {};
        }
    return state;
};
