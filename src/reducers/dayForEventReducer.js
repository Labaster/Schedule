export default (state=new Date(), action) => {
    if (action.type === 'ADD_DAY_EVENT') {
        return action.payload;
    }
    return state;
};
