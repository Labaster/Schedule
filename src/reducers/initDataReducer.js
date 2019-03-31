export default (state=[], action) => {
    if (action.type === 'ADD_INIT_DATA') {
        return [
            ...state,
            action.payload
        ];
    }
    else if (action.type === 'DELETE_INIT_DATA') {
        return [];
    }
    return state;
};
