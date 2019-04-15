exports.seed = function(knex, Promise) {
    return knex.raw('SET foreign_key_checks = 0;')
        .then(() => {
            return knex('schedule_types').del(); })
        .then(() => {
            return knex('organizations').del() })
        .then(() => {
            return knex('events_duration').del() })
        .then(() => {
            return knex('speakers_working_time').del() })
        .then(() => {
            return knex('speakers').del(); })
        .then(() => {
            return knex('rooms').del(); })
        // .then(() => {
        //     return knex('groupes').del(); })
        .then(() => {
            return knex('schedule').del(); })
        .then(() => {
            return knex('subjects').del(); })
        .then(() => {
            return knex('events').del(); })
        .then(() => {
            return knex('events_speakers_id').del(); })

        // .then(() => {
        //     return knex('organizations').insert([
        //         {id: 1, organization_name: 'INTITA'},
        //         {id: 2, organization_name: 'RIA'}
        //         ]); })
        // .then(() => {
        //     return knex('events_duration').insert([
        //         {
        //             id: 1,
        //             lesson_duration: 90,
        //             interval_break: 5
        //         },
        //         {
        //             id: 2,
        //             lesson_duration: 45,
        //             interval_break: 10
        //         }
        //         ]); })
        // .then(() => {
        //     return knex('speakers').insert([
        //         {
        //             id: 1,
        //             speaker_name: 'Oleksiy Turenkov',
        //             organization_id: 1
        //         },
        //         {
        //             id: 2,
        //             speaker_name: 'Alla Bobruk',
        //             organization_id: 1
        //         },
        //         {
        //             id: 3,
        //             speaker_name: 'Borys Mohyla',
        //             organization_id: 2
        //         }
        //     ]); })
        // .then(() => {
        //     return knex('speakers_working_time').insert([
        //         {
        //             id: 1,
        //             day: 'ПН',
        //             from: '10:00',
        //             to: '12:00',
        //             speaker_id: 1
        //         },
        //         {
        //             id: 2,
        //             day: 'ВТ',
        //             from: '12:00',
        //             to: '15:00',
        //             speaker_id: 2
        //         },
        //         {
        //             id: 3,
        //             day: 'СР',
        //             from: '18:00',
        //             to: '21:00',
        //             speaker_id: 3
        //         }
        //         ]); })
        // .then(() => {
        //     return knex('rooms').insert([
        //         {id: 1, room_name: 'see-room'},
        //         {id: 2, room_name: 'magenta-room'},
        //         {id: 3, room_name: 'sky-room'}
        //         ]); })
        // .then(() => {
        //     return knex('groupes').insert([
        //         {id: 1, group_name: 'A17'},
        //         {id: 2, group_name: 'A18'},
        //         {id: 3, group_name: 'A19'}
        //     ]); })
        .then(() => {
            return knex('schedule_types').insert([
                {id: 1, schedule_type: 'Для навчального закладу'},
                {id: 2, schedule_type: 'Для компанії'},
                {id: 3, schedule_type: 'Для організації'}
            ]); })
        // // .then(() => {
        // //     return knex('schedule_duration').insert([
        // //         {
        // //             id: 1,
        // //             schedule_start: new Date(2019, 3, 21),
        // //             schedule_end: new Date(2019, 3, 22),
        // //             schedule_type_id: 1,
        // //         },
        // //         {
        // //             id: 2,
        // //             schedule_start: new Date(2019, 3, 23),
        // //             schedule_end: new Date(2019, 3, 24),
        // //             schedule_type_id: 2,
        // //         }
        // //     ]); })
        // // .then(() => {
        // //     return knex('subjects').insert([
        // //         {
        // //             id: 1,
        // //             subject_name: 'Англійська мова',
        // //             subject_hours: 2,
        // //             organization_id: 1
        // //         },
        // //         {
        // //             id: 2,
        // //             subject_name: 'JavaScript',
        // //             subject_hours: 3,
        // //             organization_id: 2
        // //         },
        // //         {
        // //             id: 3,
        // //             subject_name: 'SWIFT',
        // //             subject_hours: 3,
        // //             organization_id: 1
        // //         },
        // //     ]); })
        // // .then(() => {
        // //     return knex('events').insert([
        // //         {
        // //             id: 1,
        // //             schedule_id: 1,
        // //             subject_id: 1,
        // //             organization_id: 1,
        // //             speaker_id: 2,
        // //             room_id: 1,
        // //             group_id: 3,
        // //             start: new Date(2019, 3, 22, 9, 0),
        // //             end: new Date(2019, 3, 22, 10, 30),
        // //             desc: 'Speaking-club'
        // //         },
        // //         {
        // //             id: 2,
        // //             schedule_id: 2,
        // //             subject_id: 2,
        // //             organization_id: 2,
        // //             speaker_id: 3,
        // //             room_id: 2,
        // //             group_id: 2,
        // //             start: new Date(2019, 3, 23, 9, 0),
        // //             end: new Date(2019, 3, 23, 10, 30),
        // //             desc: 'Speaking-club'
        // //         },
        // //         {
        // //             id: 3,
        // //             schedule_id: 1,
        // //             subject_id: 3,
        // //             organization_id: 1,
        // //             speaker_id: 2,
        // //             room_id: 3,
        // //             group_id: 1,
        // //             start: new Date(2019, 3, 24, 9, 0),
        // //             end: new Date(2019, 3, 24, 10, 30),
        // //             desc: 'Speaking-club'
        // //         },
        //         ])
                .finally(function(){
                    return knex.raw('SET foreign_key_checks = 1;');
                });
        // });
};
