
export const selectEvents =  ( store ) => {
    return store.events;
};

export const selectEventById =  ( store, eventId ) => {
    return selectEvents(store)[eventKey];
};

export const selectEventValues =  ( store ) => {
    return Object.values(selectEvents(store));
};
