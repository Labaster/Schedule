
export const selectRooms =  ( store ) => {
    return store.rooms;
};

export const selectRoomById = ( store, roomKey ) => {
    return selectRooms(store)[roomKey];
};



