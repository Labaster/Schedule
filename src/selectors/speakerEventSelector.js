
export const selectSpeakersForEvents =  ( store ) => {
    return store.speakersEvent;
};

export const selectSpeakerForEventById = ( store ) => {
    return Object.values(store.speakersEvent);
};

export const selectSpeakerFieldEventById = ( store, subjectId, field ) => {
    return selectSpeakersForEvents(store)[subjectId][field];
};
