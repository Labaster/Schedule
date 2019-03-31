import { Model } from 'objection';

class Organization extends Model {
    static get tableName() {
        return 'organization';
    }

    static get idColumn() {
        return 'id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: [
                'id',
                'organizationName',
            ],
            properties: {
                id: { type: 'integer' },
                organizationName: { type: 'string' },
            }
        };
    }
}

module.exports = Organization;