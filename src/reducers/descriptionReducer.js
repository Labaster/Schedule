export default (state='', action) => {
    if (action.type === 'ADD_DESCRIPTION_EVENT') {
        return action.payload;
    }
    else if (action.type === 'CHANGE_DESCRIPTION_EVENT') {
        return action.payload;
    }
    else if (action.type === 'REMOVE_DESCRIPTION_EVENT') {
        return '';
    }
    return state;
};
