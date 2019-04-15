const environment = process.env.NODE_ENV || 'development';
const config = require('../../config/knexfile')[environment];
const knex = require('knex')(config);

async function showOrganizations(id) {
    return knex('organizations')
        .select('organization_name', 'id as organizationID')
        .where('id', id)
}

async function showSchedule(id) {
    return knex('schedule')
        .select('schedule.id AS scheduleID', 'schedule.schedule_start', 'schedule.schedule_end',
            'schedule_types.id AS typeID', 'schedule_types.schedule_type', 'schedule.organization_id AS organizationID')
        .join('schedule_types', 'schedule.schedule_type_id', 'schedule_types.id')
        .where('organization_id', id)
}

async function showEventsDuration(id) {
    return knex('events_duration')
        .select('events_duration.id AS eventDurationID', 'lesson_duration',
            'interval_break', 'events_duration.organization_id AS organizationID',
            'events_duration.schedule_id AS scheduleID')
        .where('organization_id', id)
}

async function showSpeakers(id) {
    return knex('speakers')
        .select('speakers.id AS speakerID', 'speakers.speaker_name',
            'speakers_working_time.id AS workingTimeID',
            'speakers_working_time.day',
            'speakers_working_time.from',
            'speakers_working_time.to',
            'speakers.organization_id AS organizationID')
        .join('speakers_working_time', 'speakers.id', 'speakers_working_time.speaker_id')
        .where('organization_id', id)
}

async function showRooms(id) {
    return knex('rooms')
        .select('rooms.id as roomID', 'room_name',
            'rooms.organization_id AS organizationID')
        .where('organization_id', id)
}

async function showSubjects(id) {
    return knex('subjects')
        .select('subjects.id AS subjectID', 'subjects.subject_name',
            'subjects.subject_hours', 'subjects.organization_id AS organizationID')
        .where('organization_id', id)
}

module.exports = {
    showEventsDuration, showOrganizations, showRooms, showSchedule, showSpeakers, showSubjects, //showEvent
};