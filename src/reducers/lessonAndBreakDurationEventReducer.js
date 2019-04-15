export default (state={}, action) => {
    if (action.type === 'ADD_LESSON_AND_BREAK_EVENT') {
        return {
            ...action.payload
        }
    }
    else if (action.type === 'DELETE_LESSON_AND_BREAK_EVENT') {
        return {};
    }
    return state;
};
