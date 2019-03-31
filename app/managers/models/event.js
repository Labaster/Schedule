import { Model } from 'objection';

class Event extends Model {
    static get tableName() {
        return 'events';
    }

    static get idColumn() {
        return 'id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: [
                'id',
                'eventName',
                'organizationName',
                'speakerName',
                'roomName',
                'starts',
                'ends'
            ],
            properties: {
                id: { type: 'integer' },
                eventName: { type: 'string' },
                organizationName: { type: 'string' },
                speakerName: { type: 'string' },
                roomName: { type: 'string' },
                starts: { type: 'string' },
                ends: { type: 'string' },
                comment: { type: 'string' },
            }
        };
    }

    fullName(){
        return this.organization_name + this.id;
    }


}
module.exports = Event;