export default (state=[], action) => {
    if (action.type === 'ADD_EVENT') {
        return [
            ...state,
            action.payload
        ];
    }
    else if (action.type === 'CHANGE_EVENT') {
        const { key, changes } = action.payload;
        return [
            ...state,
            {...state.events[key], ...changes}
        ]
    }
    else if (action.type === 'DELETE_EVENT') {
        const { key } = action.payload;
        const newState = [...state];
        newState.filter( (item, index) => {
            return index !== key;
        });
    }
    return state;
};
