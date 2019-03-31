
export const selectSubjectsNamesAndHours =  ( store ) => {
    return store.subjects_names_and_hours;
};

export const selectSubjectNameAndHours = ( store, subjectKey ) => {
    return selectSubjectsNamesAndHours(store)[subjectKey];
};

export const selectSubjectNameOrHours = ( store, subjectKey, field ) => {
    return selectSubjectNameAndHours(store, subjectKey)[field];
};
