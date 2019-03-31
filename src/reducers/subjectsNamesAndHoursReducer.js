export default (state=[], action) => {
    if (action.type === 'ADD_SUBJECT') {
        return [
            ...state,
            action.payload
        ];
    }
    else if (action.type === 'CHANGE_SUBJECT') {
        const { key, changes } = action.payload;
        return [
            ...state,
            {...state.subjects_names_and_hours[key], ...changes}
        ]
    }
    else if (action.type === 'DELETE_SUBJECT') {
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
