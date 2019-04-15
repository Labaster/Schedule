export default (state={}, action) => {
    if (action.type === 'ADD_SUBJECT_EVENT') {
        return {
            ...action.payload
        };
    }
    else if (action.type === 'DELETE_SUBJECT_EVENT') {
        return {};
    }
    return state;
};
