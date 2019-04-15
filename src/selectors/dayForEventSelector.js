const moment = require('moment');

export const selectEventDay =  ( store ) => {
    return store.dayForEvent;
};

export const selectEventDayFormatted = ( store ) => {
    const ua = moment(selectEventDay(store)).locale('uk_UA');
    return {
        dayOfWeek: (ua.format('dd')).toUpperCase(),
        dayAndMonth: ua.format('LL').split(' ', 2).join(' '),
    }
};


