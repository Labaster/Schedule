export default (state={}, action) => {
    if (action.type === 'ADD_EVENT') {
        return {
            ...action.payload
        };
    }
    else if (action.type === 'CHANGE_EVENT') {
        const { key, changes } = action.payload;
        return {
            ...state,
            ...{...state[key], ...changes}
        }
    }
    else if (action.type === 'DELETE_EVENT') {
        const { key } = action.payload;
        const newState = {...state};
        for(let prop in newState) {
            if( prop === key ) {delete newState[prop];}
        }
        return newState;
    }
    return state;
};
