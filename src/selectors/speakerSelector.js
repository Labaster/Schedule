export const selectSpeakers =  ( store ) => {
    return store.speakers;
};

export const selectSpeakersKeys =  ( store ) => {
    return Object.keys(store.speakers);
};

export const selectSpeakerName = ( store, speakerKey ) => {
    return selectSpeakers(store)[speakerKey];
};



