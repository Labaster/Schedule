export default (state='', action) => {
    if (action.type === 'ADD_ORGANIZATION_NAME') {
        return action.payload;
    }
    else if (action.type === 'CHANGE_ORGANIZATION_NAME') {
        return action.payload;
    }
    else if (action.type === 'CLEAR_STORAGE') {
        return '';
    }
    return state;
};
