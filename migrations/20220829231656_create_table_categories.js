
exports.up = function(knex, Promise) {
    return knex.schema.createTable('categories', table => {
        table.increment('id').primary()
        table.string('name').notNull()
        table.interger('parentId').references('id')
            .inTable('categories')
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('categories')
  
};
