const db  = require('../managers/newEventManager');
const setCookies = require('../helpers/cookiesHelper');

async function createNewEvent(ctx) {
    setCookies(ctx);
    try {
        const data = await db.setEventData(ctx.request.body);
        if (data) {
            ctx.status = 201;
            ctx.body = {
                status: 'success',
                data: data
            };
        } else {
            ctx.status = 400;
            ctx.body = {
                status: 'error',
                message: 'The ID does not add'
            };
        }
    } catch (err) {
        ctx.status = 400;
        ctx.body = {
            status: 'error',
            message: err.message || 'Sorry, an error has occurred.'
        };
    }
}

async function getEventData(ctx) {
    setCookies(ctx);
    try {
        const event = await db.getEventData(ctx.query.id);
        ctx.status = 200;
        ctx.body = {
            data: event
        };

    } catch (err) {
        ctx.status = 400;
        return ctx.body = {
            status: 'error',
            message: err.message || 'Sorry, an error has occurred.'
        }
    }
}


module.exports = {
   createNewEvent, getEventData
};
