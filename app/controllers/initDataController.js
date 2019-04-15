const myDb = require('../managers/newScheduleManager');
const setCookies = require('../helpers/cookiesHelper');
const validator = require('node-input-validator');

const validatorObj = {
	'ctx': 'object',
	'schedule_type': 'required|string|maxLength:30',
	'organization_name': 'required|string',
	'schedule_duration': 'required|object',
	'schedule_duration.from': 'required|iso8601',
	'schedule_duration.to': 'required|iso8601',
	'lesson_duration': 'required|integer',
	'interval_break': 'required|integer',
	'subjects_names_and_hours': 'required|array',
	'subjects_names_and_hours*subject_name': 'required|string|maxLength:30',
	'subjects_names_and_hours*subject_hours': 'required|integer|digitsBetween:1,99',
	'speakers':'required|object',
	"speakers*": 'required|digit|integer',
	"days_and_hours": 'required|object',
	"days_and_hours*": 'array',
	'rooms': 'required|array',
	'rooms.*': 'required|string',
};

async function createInitData(ctx) {
	setCookies(ctx);
	const obj = await ctx.request.body;
	let errors = [];
	try {
		const validData = new validator( obj, validatorObj);
		const matched = await validData.check();
		if (!matched) { errors.push(validData.errors); }

		for (let key in obj.days_and_hours) {
			for (let i = 0; i < obj.days_and_hours[key].length; i++) {
				let workingDay = await obj.days_and_hours[key][i];

				let workingDaysAndHoursValidator = new validator(workingDay, {
					"day": "string|maxLength:9",
					"from": "string|maxLength:5",
					"to": "string|maxLength:5"
				});

				let isValidWorkingDaysAndHours = await workingDaysAndHoursValidator.check();

				if (!isValidWorkingDaysAndHours) {
					errors.push(workingDaysAndHoursValidator.errors);
				}

			}
		}

		if (errors.length > 0) {
			ctx.status = 400;
			ctx.response.message = JSON.stringify(errors);
			return;
		}

		let response = await myDb.setInitData(obj);
		if (response.errors) {
			ctx.status = 400;
			ctx.response.message = JSON.stringify(response.errors);
			}
		else {
			ctx.status = 200;
			ctx.response.message = JSON.stringify(response);
		}

	} catch (err) {
		ctx.status = 400;
		ctx.response.message = JSON.stringify(err);
	}
}

async function getInitData(ctx) {
	setCookies(ctx);
    try {
		const initData = await myDb.getInitData(ctx.query.id);
        ctx.status = 200;
        return ctx.body = {
            data: initData
        }
    } catch (err) {
		ctx.status = 400;
		return ctx.body = {
			status: 'error',
			message: err.message || 'Sorry, an error has occurred.'
		}
	}
}

module.exports = {
	createInitData, getInitData
};
