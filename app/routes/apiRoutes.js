const { getUser } = require('../controllers/apiController');
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/eventsController');
const { getSpeakers, createSpeaker, updateSpeaker, deleteSpeaker} = require('../controllers/speakersController');
const { getGroups, createGroup, updateGroup, deleteGroup} = require('../controllers/groupsController');
const { getCompanies, createCompany, updateCompany, deleteCompany} = require('../controllers/organizationsController');
const { getRooms, createRoom, updateRoom, deleteRoom} = require('../controllers/roomsController');
const { createInitData, getInitData } = require('../controllers/initDataController');
const { getSubjects, createSubject, updateSubject, deleteSubject } = require('../controllers/subjectsController');
const { getSchedules, createSchedule, updateSchedule, deleteSchedule } = require('../controllers/scheduleController');
const { createNewEvent, getEventData } = require('../controllers/newEventController');

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
        //subjects
        .get(`/api/v1/subjects/getSubjects/:id?`, getSubjects)
        .post(`/api/v1/subjects/createSubject`, createSubject)
        .post(`/api/v1/subjects/updateSubject/:id`, updateSubject)
        .post(`/api/v1/subjects/deleteSubject/:id`, deleteSubject)
        //schedule
        .get(`/api/v1/subjects/getSchedules/:id?`, getSchedules)
        .post(`/api/v1/subjects/createSchedule`, createSchedule)
        .post(`/api/v1/subjects/updateSchedule/:id`, updateSchedule)
        .post(`/api/v1/subjects/deleteSchedule/:id`, deleteSchedule)
        //data from steps 1-2
        .post(`/api/v1/createInitData`, createInitData)
        .get(`/api/v1/getInitData`, getInitData)
        //data from form
        .post('/api/v1/createNewEvent', createNewEvent)
        .get('/api/v1/showEvent', getEventData)
};
