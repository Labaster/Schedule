
export const selectEvents =  ( store ) => {
    return store.events;
};

export const selectEvent =  ( store, eventKey ) => {
    return selectEvents(store)[eventKey];
};
