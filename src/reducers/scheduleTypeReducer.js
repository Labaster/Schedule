export default (state='', action) => {
    if (action.type === 'ADD_SCHEDULE_TYPE') {
        return action.payload;
    }
    if (action.type === 'CHANGE_SCHEDULE_TYPE') {
        return action.payload;
    }
    else if (action.type === 'CLEAR_STORAGE') {
        return '';
    }
    return state;
};
