export default (state={}, action) => {
    if (action.type === 'ADD_SCHEDULE_EVENT') {
        return {
            ...action.payload
        };
    }
    else if (action.type === 'DELETE_SCHEDULE_EVENT') {
        return {};
    }
    return state;
};
