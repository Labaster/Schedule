export default (state={}, action) => {
    if (action.type === 'ADD_SPEAKER_EVENT') {
        return {
            ...action.payload
        };
    }
    else if (action.type === 'DELETE_SPEAKER_EVENT') {
        return {};
    }
    return state;
};
