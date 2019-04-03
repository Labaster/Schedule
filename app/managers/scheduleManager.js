const environment = process.env.NODE_ENV || 'development';
const config = require('../../config/knexfile')[environment];
const knex = require('knex')(config);
const { saveOrganizations, saveScheduleDuration,
    saveLessonAndBreakDuration, saveSpeakers,
    saveDaysAndHours, saveRooms, saveSubjects } = require('../helpers/knexHelper.js');

module.exports = {
    //***Save data to DB***//
    setInitData: async function saveInitDataToDb(obj) {
        try{
            const organization = await saveOrganizations(obj);
            const scheduleDuration =  await saveScheduleDuration(obj);
            const lessonAndBreakDuration = await saveLessonAndBreakDuration(obj);
            const speakers = await saveSpeakers(obj);
            const daysAndHours = await saveDaysAndHours(obj);
            const rooms = await saveRooms(obj);
            const subjects = await saveSubjects(obj);

            if(organization && scheduleDuration &&
                lessonAndBreakDuration && speakers &&
                daysAndHours && rooms && subjects) {
                ctx.status = 200;
            } else {
                ctx.status = 400;
            }
        }
        catch (err) {
            console.log(err);
            return err;
        }
    },
    //***Get data from DB***///
    getInitData: function getInitDataFromDb() {
        return Promise.all([
            knex('schedule_types')
                .select('schedule_type'),

            knex('organizations')
                .select('organization_name'),

            knex('schedule_duration')
                .select('schedule_start', 'schedule_end'),

            knex('events_duration')
                .select('lesson_duration', 'interval_break'),

            knex('speakers')
                .select('speaker_name'),

            knex('speakers_working_time')
                .select('day', 'from', 'to'),

            knex('rooms')
                .select('room_name'),

            knex('subjects')
                .select('subject_name', 'subject_hours'),
        ])
    }
};
