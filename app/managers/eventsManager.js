const environment = process.env.NODE_ENV || 'development';
const config = require('../../config/knexfile')[environment];
const knex = require('knex')(config);

module.exports = {
    // Get all events from DB
    getAll: function getAllFromDb(params) {
        if (Object.getOwnPropertyNames(params).length === 0) {
            return knex
                .select('*')
                .from('events')
        } else {
            return knex
                .select('*')
                .from('events')
                .where({...params});
        }
    },

    // Get record by id from DB
    getById: function getIdFromDb(params) {
        return knex.select('*')
            .from('events')
            .where({id: parseInt(params)});
    },

    // Add new id record to DB
    setNewEvent: function setNewEvent(params) {
        return knex('events')
            .insert({...params});
    },

    // Update id record into DB
    updateEvent: function updateIdToDb(params) {
        return knex('events')
            .where({ id: parseInt(params)})
            .update({...params});
    },

    // Remove id record into DB
    removeId: function removeIdInDb(params) {
        return knex('events')
            .where({id: parseInt(params)})
            .del();
    }
};
