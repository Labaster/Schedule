class Model{
    static all() {
        return knex(this.table_name)
            .select('*');
    }
    // Get record by id from DB
    static find(id) {
        /*let events = knex(this.tableName);*/
        return knex(this.tableName)
            .select('*')
            .where({id: parseInt(id)});
    }

    // Add new id record to DB
    static create(id) {
        //let events = knex(this.tableName);
        return knex(this.tableName)
            .insert(id)
            .returning('*');
    }

    // Update id record into DB
    static update(id, event) {
        //let events = knex(this.tableName);
        return knex(this.tableName)
            .update(event)
            .where({id: parseInt(id)})
            .returning('*');
    }

    // Remove id record into DB
    static remove(id) {
        //let events = knex(this.tableName);
        return knex(this.tableName)
            .del()
            .where({id: parseInt(id)})
            .returning('*');
    }
}