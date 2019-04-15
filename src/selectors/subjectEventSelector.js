
export const selectSubjectsEvent =  ( store ) => {
    return store.subjectsEvent;
};

export const selectSubjectNameAndHours = ( store ) => {
    return Object.values(selectSubjectsEvent(store));
};

export const selectSubjectFieldEventById = ( store, subjectId, field ) => {
    return selectSubjectsEvent(store)[subjectId][field];
};
