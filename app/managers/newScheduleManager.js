const _ = require('lodash');
const { saveOrganizations, saveSchedule,
    saveLessonAndBreakDuration, saveSpeakers,
    saveDaysAndHours, saveRooms, saveSubjects } = require('../helpers/knexHelperSave.js');
const { showEventsDuration, showOrganizations,
    showRooms, showSchedule, showSpeakers, showSubjects} = require('../helpers/knexHelperShow');

module.exports = {
    //***Save data to DB***//
    setInitData: async function saveInitDataToDb(obj) {
        try{
            const organization = await saveOrganizations(obj);
            const schedule =  await saveSchedule(obj);
            const lessonAndBreakDuration = await saveLessonAndBreakDuration(obj, schedule);
            const speakers = await saveSpeakers(obj, schedule);
            const daysAndHours = await saveDaysAndHours(obj);
            const rooms = await saveRooms(obj);
            const subjects = await saveSubjects(obj);

            if(organization && schedule &&
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
    getInitData: async function getInitDataFromDb(params) {
        //*****For test:*****
        params = 1;
        //*****************//
        try{
          const [
                  organization,
                  schedule,
                  lessonAndBreakDuration,
                  speakers,
                  rooms,
                  subjects,
                ] = await Promise.all([
            showOrganizations(params),
            showSchedule(params),
            showEventsDuration(params),
            showSpeakers(params),
            showRooms(params),
            showSubjects(params),
          ]);

           if(organization && schedule &&
               lessonAndBreakDuration && speakers
               && rooms && subjects) {
               return {
                   organization: _.keyBy(organization, ({ organizationID }) => organizationID),
                   schedule: _.keyBy(schedule, ({ scheduleID }) => scheduleID),
                   lessonAndBreakDuration: _.keyBy(lessonAndBreakDuration, ({ eventDurationID }) => eventDurationID),
                   speakers: _.keyBy(speakers, ({ speakerID }) => speakerID),
                   rooms: _.keyBy(rooms, ({ roomID }) => roomID),
                   subjects : _.keyBy(subjects, ({subjectID }) => subjectID)
               };
           } else {
               return 'Nothing to show...';
           }
       }
       catch (err) {
           console.log(err);
           return err;
       }
    },
};
