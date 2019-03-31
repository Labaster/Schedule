export default (state={}, action) => {
    if (action.type === 'ADD_SPEAKER') {
        const keysArr = Object.keys(state);
        const lastKey = keysArr[keysArr.length-1];

        if(Object.keys(state).length === 0)
            return {
            ...state, ...{[Object.keys(state).length+1]: action.payload}
        };
        return {
            ...state, ...{[parseInt(lastKey)+1]: action.payload}
        };
    }
    else if (action.type === 'DELETE_SPEAKER') {
        const newState = {...state};
        delete newState[action.payload];
        return {...newState}
    }
    else if (action.type === 'CLEAR_STORAGE') {
        return {};
    }
    return state;
};

