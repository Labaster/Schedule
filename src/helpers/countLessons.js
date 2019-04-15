const moment = require('moment');

 export const countLessons = (lessonAndBreakDurationObj) => {
    const hoursAndMinutes ={
        hours: 0,
        minutes: 0,
    };
    const { lesson_duration, interval_break } = lessonAndBreakDurationObj;
    if (!lesson_duration || !interval_break) {return;}
    const lessons = {};

    try {
        if( lesson_duration % 60 >= 1 ) {
            hoursAndMinutes.hours = Math.trunc(lesson_duration/60 );
            hoursAndMinutes.minutes = lesson_duration % 60;
        }else{
            hoursAndMinutes.minutes = lesson_duration;
        }

        const maxLessons = Math.ceil(720/(lesson_duration + interval_break) );

        const obj = {
            start: moment().hour(9).minute(0).format('HH : mm'),
            end: moment().hour(9+hoursAndMinutes.hours).minute(hoursAndMinutes.minutes).format('HH : mm')
        };

        for(let i = 1; i <= maxLessons; i++) {
            if(i === 1) {
                lessons[i] = obj.start + ' - ' + obj.end;
            } else {
                obj.start = moment(obj.end, 'HH : mm').add(interval_break, 'minutes').format('HH : mm');
                obj.end = moment(obj.start, 'HH : mm').add(hoursAndMinutes.hours, 'hours').add(hoursAndMinutes.minutes, 'minutes').format('HH : mm');
                lessons[i] = obj.start + ' - ' + obj.end;
            }
        }
        return lessons;
    } catch (error) {
        console.error(error);
    }
};
