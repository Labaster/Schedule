exports.up = (knex) => {
    return knex.schema.withSchema('schedule')
        .createTable('schedule_types', (table) => {
            table.increments('id').unsigned().primary().notNullable();
            table.string('schedule_type').notNullable();
            table.timestamps(false, true);
            table.timestamp('deleted_at').defaultTo(knex.fn.now()).notNullable();
        })
        .createTable('organizations', (table) => {
            table.increments('id').unsigned().primary().notNullable();
            table.string('organization_name').notNullable();
            table.timestamps(false, true);
            table.timestamp('deleted_at').defaultTo(knex.fn.now()).notNullable();
        })
        .createTable('schedule', (table) => {
            table.increments('id').unsigned().primary().notNullable();
            table.string('schedule_start').notNullable();
            table.string('schedule_end').notNullable();
            table.integer('organization_id').unsigned().notNullable();
            table.integer('schedule_type_id').unsigned().notNullable();
            table.timestamps(false, true);
            table.timestamp('deleted_at').defaultTo(knex.fn.now()).notNullable();

            table.foreign('organization_id').references('id').inTable('organizations');
            table.foreign('schedule_type_id').references('id').inTable('schedule_types');
        })
        .createTable('events_duration', (table) => {
            table.increments('id').unsigned().primary().notNullable();
            table.integer('lesson_duration').notNullable();
            table.integer('interval_break').notNullable();
            table.integer('schedule_id').unsigned().notNullable();
            table.integer('organization_id').unsigned().notNullable();
            table.timestamps(false, true);
            table.timestamp('deleted_at').defaultTo(knex.fn.now()).notNullable();

            table.foreign('organization_id').references('id').inTable('organizations');
            table.foreign('schedule_id').references('id').inTable('schedule');
        })
        .createTable('speakers', (table) => {
            table.increments('id').unsigned().primary().notNullable();
            table.string('speaker_name').notNullable();
            table.integer('organization_id').unsigned().notNullable();
            table.integer('schedule_id').unsigned().notNullable();
            table.timestamps(false, true);
            table.timestamp('deleted_at').defaultTo(knex.fn.now()).notNullable();

            table.foreign('organization_id').references('id').inTable('organizations');
            table.foreign('schedule_id').references('id').inTable('schedule');
        })
        .createTable('speakers_working_time', (table) => {
            table.increments('id').unsigned().primary().notNullable();
            table.string('day').notNullable();
            table.string('from').notNullable();
            table.string('to').notNullable();
            table.integer('speaker_id').unsigned().notNullable();
            table.timestamps(false, true);
            table.timestamp('deleted_at').defaultTo(knex.fn.now()).notNullable();

            table.foreign('speaker_id').references('id').inTable('speakers');
        })
        .createTable('rooms', (table) => {
            table.increments('id').unsigned().primary().notNullable();
            table.string('room_name').notNullable();
            table.integer('organization_id').unsigned().notNullable();
            table.timestamps(false, true);
            table.timestamp('deleted_at').defaultTo(knex.fn.now()).notNullable();

            table.foreign('organization_id').references('id').inTable('organizations');
        })
        // .createTable('groupes', (table) => {
        //     table.increments('id').unsigned().primary().notNullable();
        //     table.string('group_name').notNullable();
        //     table.timestamps(false, true);
        //     table.timestamp('deleted_at').defaultTo(knex.fn.now()).notNullable();
        // })
        .createTable('subjects', (table) => {
            table.increments('id').unsigned().primary().notNullable();
            table.string('subject_name').notNullable();
            table.integer('subject_hours').unsigned().notNullable();
            table.integer('organization_id').unsigned().notNullable();
            table.timestamps(false, true);
            table.timestamp('deleted_at').defaultTo(knex.fn.now()).notNullable();

            table.foreign('organization_id').references('id').inTable('organizations');
        })
        .createTable('events', (table) => {
            table.increments('id').unsigned().primary().notNullable();
            table.integer('schedule_id').unsigned().notNullable();
            table.integer('organization_id').unsigned().notNullable();
            table.integer('subject_id').unsigned().notNullable();
            table.integer('room_id').unsigned().notNullable();
            table.string('date').notNullable();
            table.string('duration').notNullable();
            table.string('desc').notNullable();
            table.timestamps(false, true);
            table.timestamp('deleted_at').defaultTo(knex.fn.now()).notNullable();

            table.foreign('schedule_id').references('id').inTable('schedule');
            table.foreign('organization_id').references('id').inTable('organizations');
            table.foreign('subject_id').references('id').inTable('subjects');
            table.foreign('room_id').references('id').inTable('rooms');
        })
        .createTable('events_speakers_id', (table) => {
            table.increments('id').unsigned().primary().notNullable();
            table.integer('speaker_id').unsigned().notNullable();
            table.integer('event_id').unsigned().notNullable();
            table.timestamps(false, true);
            table.timestamp('deleted_at').defaultTo(knex.fn.now()).notNullable();

            table.foreign('speaker_id').references('id').inTable('speakers');
            table.foreign('event_id').references('id').inTable('events');
        })
};

exports.down = (knex) => {
    return knex.schema
        .dropTable('schedule')
        .dropTable('events_duration')
        .dropTable('speakers_working_time')
        .dropTable('speakers')
        .dropTable('rooms')
        //.dropTable('groupes')
        .dropTable('schedule_types')
        .dropTable('schedule_duration')
        .dropTable('subjects')
        .dropTable('events')
        .dropTable('events_speakers_id')
};
