
export const selectDays =  ( store ) => {
    return store.days_and_hours;
};

export const selectSpeakerDaysById = ( store, speakerKey ) => {
    return selectDays(store)[speakerKey];
};

export const selectOneSpeakerDayHoursById = ( store, speakerKey, dayKey ) => {
    return selectSpeakerDaysById(store, speakerKey)[dayKey];
};

