import { countLessons } from '../helpers/countLessons.js';

export const selectLessonAndBreak = ( store ) => {
    return store.lessonAndBreakDurationEvent['1'];
};

export const  selectLessons = ( store ) => {
    const lessonAndBreakDurationObj = selectLessonAndBreak(store);
    if (!lessonAndBreakDurationObj) return;
    return  countLessons(lessonAndBreakDurationObj);
};

export const  selectOneLesson = ( store ) => {
    const countLessons = selectLessons(store);
    if (!countLessons) return;
    return  Object.values(selectLessons(store));
};
