export default (state={}, action) => {
    if (action.type === 'ADD_ROOM_EVENT') {
        return {
            ...action.payload
        };
    }
    else if (action.type === 'DELETE_ROOM_EVENT') {
        return {};
    }
    return state;
};
