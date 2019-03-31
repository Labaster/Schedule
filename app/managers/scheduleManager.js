const environment = process.env.NODE_ENV || 'development';
const config = require('../../config/knexfile')[environment];
const knex = require('knex')(config);

module.exports = {

    //***Save data to DB***//
	setInitData: function saveInitDataToDb(obj) {
        return Promise.resolve()
            // insert organization name
            .then( () => {
                return knex('organizations')
                    .select('organization_name')
                    .where('organization_name', obj.organization_name,)
                    .then(rows => {
                        if (rows.length===0) {
                        // no matching records found
                            return knex('organizations').insert({organization_name: obj.organization_name})
                        } else {
                            console.log('Organization ' + obj.organization_name + ' already exist')
                        }
                    })
            })
            // insert schedule duration from - to
            .then( ()=> {
                return knex('schedule_duration').insert({
                    schedule_start: obj.schedule_duration.from,
                    schedule_end: obj.schedule_duration.to,
                    organization_id: knex('organizations')
                        .where('organization_name', obj.organization_name)
                        .select('id'),
                    schedule_type_id: parseInt(obj.schedule_type)
                })
            })
            // insert schedule & break duration
            .then( ()=> {
                return knex('events_duration').insert({
                    lesson_duration: obj.lesson_duration,
                    interval_break: obj.interval_break,
                })
            })
            // insert speakers
            .then( ()=> {
                return knex('speakers')
                    .select('speaker_name')
                    .whereIn('speaker_name', Object.values(obj.speakers).map(data => {
                        return data
                    }))
                    .then( rows => {
                        rows = rows.map( value => {
                            return value.speaker_name});
                        if(rows.length === 0){
                            return knex('speakers').insert(Object.values(obj.speakers).map(data => {
                                return {
                                    speaker_name: data,
                                    organization_id: knex('organizations')
                                        .where('organization_name', obj.organization_name)
                                        .select('id')
                                }
                            }))
                        } else {
                            rows = Object.values(obj.speakers).filter( value => {
                                return !rows.includes(value);
                            });
                            return knex('speakers').insert(rows.map( data => {
                                return {
                                    speaker_name: data,
                                    organization_id: knex('organizations')
                                        .where('organization_name', obj.organization_name)
                                        .select('id')
                                }
                            }))
                        }
                    })
                })
                //insert days_and_hours
                .then( () => {
                    return Object.keys(obj.days_and_hours).map(value => {
                        obj.days_and_hours[value].map(data => {
                            new Promise( (resolve, reject) => {
                                knex('speakers_working_time').insert({
                                    day: data.day,
                                    from: data.from,
                                    to: data.to,
                                    speaker_id: knex('speakers').select('id').where({
                                    speaker_name: obj.speakers[value]

                                }),
                                })
                                    .then(resolve())
                                    .catch( (err) => {
                                        reject(err);
                                    });
                            })
                        })
                    })
                })
                //insert speakers_and_days_id
                // .then(()=>{
                //     return knex('speakers_and_days_id').insert({
                //         speaker_id: knex('speakers').select('id').where({
                //             speaker_name: Object.keys(obj.days_and_hours).map(data => {
                //                 console.log(obj.speakers[data]);
                //                 return obj.speakers[data]
                //             })
                //         }),
                //         speakers_working_time_id: 1
                //     })
                // })
                // insert rooms
                .then( () => {
                    return knex('rooms')
                        .select('room_name')
                        .whereIn('room_name', obj.rooms.map( data => {
                            return data
                        }))
                        .then( rows => {
                            rows = rows.map(value => {
                                return value.room_name});
                            if(rows.length === 0){
                                return knex('rooms').insert(obj.rooms.map( data => {
                                    return {
                                        room_name: data
                                    }
                                }))
                            } else {
                                rows = obj.rooms.filter( element => {
                                    return !rows.includes(element);
                                });
                                return knex('rooms').insert(rows.map( data => {
                                    return {
                                        room_name: data
                                    }
                                }))
                                }
                        })
                })
                // insert subjects
                .then( ()=> {
                    return knex('subjects')
                        .select('subject_name')
                        .whereIn('subject_name', obj.subjects_names_and_hours.map( data=> {return data}))
                        .then( rows => {
                            rows = rows.map( value => {
                                return value.subject_name});
                            if(rows.length === 0){
                                return knex('subjects').insert(obj.subjects_names_and_hours.map( data=> {
                                    return {
                                        subject_name: data.subject_name,
                                        subject_hours: data.subject_hours,
                                        organization_id: knex('organizations')
                                            .where('organization_name', obj.organization_name)
                                            .select('id')
                                    }
                                }))
                            } else {
                                rows = obj.subjects_names_and_hours.filter( value => {
                                    return !rows.includes(value.subject_name);
                                });
                                return knex('subjects').insert(rows.map( data=> {
                                    return {
                                        subject_name: data.subject_name,
                                        subject_hours: data.subject_hours,
                                        organization_id: knex('organizations')
                                            .where('organization_name', obj.organization_name)
                                            .select('id')
                                    }
                                }))
                            }
                        })
                    })
                .catch(error=> {
                    console.log(error);
                    return error
                })
	},

    //***Get data from DB***///
    getInitData: function getInitDataFromDb() {
        return knex
            .select('schedule_duration.schedule_start',
                'schedule_duration.schedule_end',
                'organizations.organization_name',
                'subjects.subject_name',
                'subjects.subject_hours')
            .from('schedule_duration')
            .join('organizations', 'organizations.id', 'schedule_duration.organization_id', )
            .join('subjects', 'organizations.id', 'subjects.organization_id')
    }
};