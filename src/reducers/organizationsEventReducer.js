export default (state={}, action) => {
    if (action.type === 'ADD_ORGANIZATION_EVENT') {
        return {
            ...action.payload
        };
    }
    else if (action.type === 'DELETE_ORGANIZATION_EVENT') {
        return {};
    }
    return state;
};
