import { combineReducers } from 'redux';
import interval_break from './intervalBreakReducer';
import schedule_duration from './scheduleDurationReducer';
import lesson_duration from './lessonDurationReducer';
import organization_name from './organizationNameReducer';
import schedule_type from './scheduleTypeReducer';
import speakers from './speakersReducer';
import subjects_names_and_hours from './subjectsNamesAndHoursReducer';
import days_and_hours from './daysAndHoursReducer';
import events from './eventsReducer';
import user from './userReducer';
import rooms from './roomReducer';
import initData from './initDataReducer';

export default combineReducers({
    schedule_type,
    organization_name,
    schedule_duration,
    lesson_duration,
    interval_break,
    subjects_names_and_hours,
    speakers,
    days_and_hours,
    events,
    user,
    rooms,
    initData,
});
