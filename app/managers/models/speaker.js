import { Model } from 'objection';

class Speakers extends Model {
    static get tableName() {
        return 'speakers';
    }

    static get idColumn() {
        return 'id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: [
                'id',
                'speakerName',
                'organizationId'
            ],
            properties: {
                id: { type: 'integer' },
                speakerNameName: { type: 'string' },
                organizationId: { type: 'integer' }
            }
        };
    }
}

module.exports = Speakers;