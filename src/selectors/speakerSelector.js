
export const selectSpeakers =  ( store ) => {
    return store.speakers;
};

export const selectSpeakerName = ( store, speakerKey ) => {
    return selectSpeakers(store)[speakerKey];
};



