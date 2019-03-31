import { selectDays } from './dayAndHoursSelector.js';
import { selectIntervalBreak } from './intervalBreakSelector.js';
import { selectLessonDuration } from './lessonDurationSelector.js';
import { selectOrganizationName } from './organizationNameSelector.js';
import { selectScheduleType } from './scheduleTypeSelector.js';
import { selectSpeakers } from './speakerSelector.js';
import { selectSubjectsNamesAndHours } from './subjectsNamesAndHours.js';
import { selectScheduleDuration } from './scheduleDurationSelector.js';
import { selectRooms } from './roomsSelector';

export const dataForServer =  ( store ) => {
    return {
        schedule_type: selectScheduleType(store),
        organization_name: selectOrganizationName(store),
        schedule_duration: selectScheduleDuration(store),
        lesson_duration: selectLessonDuration(store),
        interval_break: selectIntervalBreak(store),
        subjects_names_and_hours: selectSubjectsNamesAndHours(store),
        speakers: selectSpeakers(store),
        days_and_hours: selectDays(store),
        rooms: selectRooms(store),
    };
};
