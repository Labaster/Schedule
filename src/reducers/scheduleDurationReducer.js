export default (state={}, action) => {
    if (action.type === 'ADD_SCHEDULE_DURATION') {
        return {
            ...action.payload
        };
    }
    else if (action.type === 'CHANGE_SCHEDULE_DURATION') {
        return {
            ...action.payload
        };
    }
    else if (action.type === 'CLEAR_STORAGE') {
        return {};
    }
    return state;
};
