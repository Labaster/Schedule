const _ = require('lodash');
const {setNewEvent, setNewID, showEvent} = require('../helpers/eventHelper');

module.exports = {
    //***Save data to DB***//
    setEventData: async function saveNewEvent(obj) {
        try{
            const{speaker_id, ...rest} = obj;
            const event = await setNewEvent(rest);
            const id = await setNewID({speaker_id:speaker_id, event_id: event[0]});
            if(event&&id) {
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
    getEventData: async function getEventDataFromDb(params) {
        //*****For test:*****
        params = 1;
        //*****************//
        try{
            const event = await showEvent(params);
            if(event) {
                return {
                    event: _.keyBy(event, ({ eventID }) => eventID),
                };
            } else {
                return 'Nothing to show...';
            }
        }
        catch (err) {
            console.log(err);
            return err;
        }
    }
};