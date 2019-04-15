const environment = process.env.NODE_ENV || 'development';
const config = require('../../config/knexfile')[environment];
const knex = require('knex')(config);

async function setNewEvent(params) {
    return knex('events')
        .insert({...params});
}

async function setNewID(params) {
    return knex('events_speakers_id')
        .insert({...params});
}

async function showEvent() {
    return knex('events')
        .select('events.id AS eventID', 'events.schedule_id AS scheduleID',
            'organization_name', 'events.organization_id AS organizationID',
            'events.duration', 'events.desc', 'events.date',
            'subject_name', 'events.subject_id AS subjectID',
            'room_name', 'events.room_id AS roomID',
            'speaker_name', 'speaker_id AS speakerID')
        .join('schedule', 'schedule.id', 'events.schedule_id')
        .join('organizations', 'organizations.id', 'events.organization_id')
        .join('subjects', 'subjects.id', 'events.subject_id')
        .join('rooms', 'rooms.id', 'events.room_id')
        .join('events_speakers_id', 'events_speakers_id.event_id', 'events.id', )
        .join('speakers', 'speakers.id', 'events_speakers_id.speaker_id')
}

module.exports = {setNewEvent, setNewID, showEvent};