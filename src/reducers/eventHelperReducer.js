export default (state={}, action) => {
    if (action.type === 'ADD_EVENT_HELPER') {
        return {
            ...action.payload
        }
    }
    else if (action.type === 'DELETE_EVENT_HELPER') {
        return {};
    }
    return state;
};
