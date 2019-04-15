
export const selectRoomEvent =  ( store ) => {
    return store.roomsEvent;
};

export const selectRoomNameEvent = ( store ) => {
    return Object.values(selectRoomEvent(store));
};

export const selectRoomFieldEventById = ( store, roomId, field ) => {
    return selectRoomEvent(store)[roomId][field];
};
