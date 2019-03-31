import { Model } from 'objection';

class Room extends Model {
    static get tableName() {
        return 'room';
    }

    static get idColumn() {
        return 'id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: [
                'id',
                'roomName',
            ],
            properties: {
                id: { type: 'integer' },
                roomName: { type: 'string' },
            }
        };
    }
}

module.exports = Room;