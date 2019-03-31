import { Model } from 'objection';

class Group extends Model {
    static get tableName() {
        return 'group';
    }

    static get idColumn() {
        return 'id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: [
                'id',
                'groupName',
            ],
            properties: {
                id: { type: 'integer' },
                groupName: { type: 'string' },
            }
        };
    }
}

module.exports = Group;