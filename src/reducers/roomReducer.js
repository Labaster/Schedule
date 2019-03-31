export default (state=[], action) => {
    if (action.type === 'ADD_ROOM') {
        return [
            ...state,
            action.payload
        ];
    }
    else if (action.type === 'DELETE_ROOM') {
        const key = action.payload;
        return [...state].filter( (item, index) => {
            return index !== key;
        });
    }
    else if (action.type === 'CLEAR_STORAGE') {
        return [];
    }
    return state;
};
