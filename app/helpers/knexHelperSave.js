const environment = process.env.NODE_ENV || 'development';
const config = require('../../config/knexfile')[environment];
const knex = require('knex')(config);

async function saveOrganizations(obj) {
    try{
        let rows = await knex('organizations')
            .select('organization_name')
            .where('organization_name', obj.organization_name,);

        if (rows.length === 0) {
            // no matching records found
            return await knex('organizations').insert({organization_name: obj.organization_name})
        } else {
            console.log('Organization ' + obj.organization_name + ' already exist')
        }
    }catch (err) {
        return err;
    }
}

async function saveSchedule(obj) {
    try{
        return await knex('schedule')
            .insert({
                schedule_start: obj.schedule_duration.from,
                schedule_end: obj.schedule_duration.to,
                organization_id: knex('organizations')
                    .where('organization_name', obj.organization_name)
                    .select('id'),
                schedule_type_id: parseInt(obj.schedule_type)
            });
    }catch (err) {
        return err;
    }
}

async function saveLessonAndBreakDuration(obj, schedule) {
    try{
        return await knex('events_duration')
            .insert({
                lesson_duration: obj.lesson_duration,
                interval_break: obj.interval_break,
                schedule_id: schedule,
                organization_id: knex('organizations')
                    .where('organization_name', obj.organization_name)
                    .select('id'),
            });
    }catch (err) {
        return err;
    }
}

async function saveSpeakers(obj, schedule) {
    try{
        let rows = await knex('speakers')
            .select('speaker_name')
            .whereIn('speaker_name', Object.values(obj.speakers).map(data => {
                return data;
            }));

        rows = await rows.map(value => {
            return value.speaker_name
        });

        if (rows.length === 0) {
            return await knex('speakers').insert(Object.values(obj.speakers).map(data => {
                return {
                    speaker_name: data,
                    organization_id: knex('organizations')
                        .where('organization_name', obj.organization_name)
                        .select('id'),
                    schedule_id: schedule
                }
            }))
        } else {
            rows = Object.values(obj.speakers).filter(value => {
                return !rows.includes(value);
            });
            return await knex('speakers').insert(rows.map(data => {
                return {
                    speaker_name: data,
                    organization_id: knex('organizations')
                        .where('organization_name', obj.organization_name)
                        .select('id'),
                    schedule_id: schedule
                }
            }))
        }
    }catch (err) {
        return err;
    }
}

async function saveDaysAndHours(obj) {
    try{
        await Object.keys(obj.days_and_hours).map(async (value) => {
            return await obj.days_and_hours[value].map(async (data) => {
                return await knex('speakers_working_time').insert({
                    day: data.day,
                    from: data.from,
                    to: data.to,
                    speaker_id: knex('speakers').select('id').where({
                        speaker_name: obj.speakers[value]
                    }),
                })
            })
        });
        return await (true);
    }catch (err) {
        return err;
    }
}

async function saveRooms(obj) {
    try{
        let rows =  await knex('rooms')
            .select('room_name')
            .whereIn('room_name', obj.rooms.map(data => {
                return data
            }));

        rows = await rows.map(value => {
            return value.room_name
        });

        if (rows.length === 0) {
            return await knex('rooms').insert(obj.rooms.map(data => {
                return {
                    room_name: data,
                    organization_id: knex('organizations')
                        .where('organization_name', obj.organization_name)
                        .select('id')
                }
            }))
        } else {
            rows = obj.rooms.filter(element => {
                return !rows.includes(element);
            });
            return await knex('rooms').insert(rows.map(data => {
                return {
                    room_name: data,
                    organization_id: knex('organizations')
                        .where('organization_name', obj.organization_name)
                        .select('id')
                }
            }))
        }
    }catch (err) {
        return err;
    }
}

async function saveSubjects(obj) {
    console.log(obj);
    try{
        let rows = await knex('subjects')
            .select('subject_name')
            .whereIn('subject_name', obj.subjects_names_and_hours.map(data => {
                return data
            }));
        rows = await rows.map(value => {
            return value.subject_name
        });
        if (rows.length === 0) {
            return await knex('subjects').insert(obj.subjects_names_and_hours.map(data => {
                return {
                    subject_name: data.subject_name,
                    subject_hours: data.subject_hours,
                    organization_id: knex('organizations')
                        .where('organization_name', obj.organization_name)
                        .select('id')
                }
            }))
        } else {
            rows = await obj.subjects_names_and_hours.filter(value => {
                return !rows.includes(value.subject_name);
            });
            return await knex('subjects').insert(rows.map(data => {
                return {
                    subject_name: data.subject_name,
                    subject_hours: data.subject_hours,
                    organization_id: knex('organizations')
                        .where('organization_name', obj.organization_name)
                        .select('id')
                }
            }))
        }
    }catch (err) {
        return err;
    }
}

module.exports = {
    saveOrganizations, saveSchedule, saveLessonAndBreakDuration,
    saveSpeakers, saveDaysAndHours, saveRooms, saveSubjects,
};
