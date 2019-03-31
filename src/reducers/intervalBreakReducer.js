export default (state='', action) => {
    if (action.type === 'ADD_INTERVAL_BREAK') {
        return action.payload;
    }
    else if (action.type === 'CHANGE_INTERVAL_BREAK') {
        return action.payload;
    }
    else if (action.type === 'CLEAR_STORAGE') {
        return '';
    }
    return state;
};
