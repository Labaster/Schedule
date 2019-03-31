const { getUser } = require('../controllers/apiController');
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/eventsController');
const { getSpeakers, createSpeaker, updateSpeaker, deleteSpeaker} = require('../controllers/speakersController');
const { getGroups, createGroup, updateGroup, deleteGroup} = require('../controllers/groupsController');
const { getCompanies, createCompany, updateCompany, deleteCompany} = require('../controllers/organizationsController');
const { getRooms, createRoom, updateRoom, deleteRoom} = require('../controllers/roomsController');

const { createInitData, getInitData } = require('../controllers/initDataController');

module.exports = function (router) {
    router
        .get(`/api/v1/getUser`, getUser)
        //events
        .get(`/api/v1/events/getEvents/:id?`, getEvents)
        .post(`/api/v1/events/createEvent`, createEvent)
        .post(`/api/v1/events/updateEvent/:id`, updateEvent)
        .post(`/api/v1/events/deleteEvent/:id`, deleteEvent)
        //speakers
        .get(`/api/v1/speakers/getSpeakers/:id?`, getSpeakers)
        .post(`/api/v1/speakers/createSpeaker`, createSpeaker)
        .post(`/api/v1/speakers/updateSpeaker/:id`, updateSpeaker)
        .post(`/api/v1/speakers/deleteSpeaker/:id`, deleteSpeaker)
        //groups
        .get(`/api/v1/groups/getGroups/:id?`, getGroups)
        .post(`/api/v1/groups/createGroup`, createGroup)
        .post(`/api/v1/groups/updateGroup/:id`, updateGroup)
        .post(`/api/v1/groups/deleteGroup/:id`, deleteGroup)
        //organizations
        .get(`/api/v1/companies/getCompanies/:id?`, getCompanies)
        .post(`/api/v1/companies/createCompany`, createCompany)
        .post(`/api/v1/companies/updateCompany/:id`, updateCompany)
        .post(`/api/v1/companies/deleteCompany/:id`, deleteCompany)
        //rooms
        .get(`/api/v1/rooms/getRooms/:id?`, getRooms)
        .post(`/api/v1/rooms/createRoom`, createRoom)
        .post(`/api/v1/rooms/updateRoom/:id`, updateRoom)
        .post(`/api/v1/rooms/deleteRoom/:id`, deleteRoom)
        //data from steps 1-2
        .post(`/api/v1/createInitData`, createInitData)
        .get(`/api/v1/getInitData`, getInitData)
};
