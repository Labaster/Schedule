const myDb = require('../managers/scheduleManager');
const setCookies = require('../helpers/cookiesHelper');

async function getSchedules(ctx) {
    setCookies(ctx);
    try {
        if(ctx.params.id) {
            const event = await myDb.getById(ctx.params.id);
            if (event.length) {
                ctx.body = {
                    status: 'success',
                    data: event
                };
            } else {
                ctx.status = 404;
                return ctx.body = {
                    status: 'error',
                    message: 'That event does not exist.'
                };
            }
        } else {
            const events = await myDb.getAll(ctx.query);
            return ctx.body = {
                status: 'success',
                data: events
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

async function createSchedule(ctx) {
    setCookies(ctx);
    try {
        const event = await myDb.setNewEvent(ctx.request.body);
        if (event.length) {
            ctx.status = 201;
            ctx.body = {
                status: 'success',
                data: event
            };
        } else {
            ctx.status = 400;
            ctx.body = {
                status: 'error',
                message: 'The event does not add'
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

async function updateSchedule(ctx) {
    setCookies(ctx);
    try {
        const event = await myDb.updateEvent(ctx.request.body);
        if (event === 1) {
            ctx.status = 200;
            ctx.body = {
                status: 'success'
            };
        } else {
            ctx.status = 404;
            ctx.body = {
                status: 'error',
                message: 'That event does not exist.'
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

async function deleteSchedule(ctx) {
    setCookies(ctx);
    try {
        const event = await myDb.removeId(ctx.params.id);
        if (event === 1) {
            ctx.status = 200;
            ctx.body = {
                status: 'successfully deleted',
                data: event
            };
        } else {
            ctx.status = 404;
            ctx.body = {
                status: 'error',
                message: 'That event does not exist.'
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

module.exports = {
    getSchedules, createSchedule, updateSchedule, deleteSchedule
};
