
export const selectScheduleType =  ( store ) => {
    return store.schedule_type;
};

export const selectScheduleById =  ( store, scheduleId = 1, type = undefined ) => {
    const scheduleObj =  store.scheduleCreateEvent[scheduleId];
    if(!scheduleObj) return null;
    return scheduleObj[type];

};
