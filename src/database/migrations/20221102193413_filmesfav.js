exports.up = function(knex) {
    return knex.schema.createTable("filmesfav", function(table) {
        table.string("filme_id").notNullable();
        table
            .foreign("filme_id")
            .references("filme_id")
            .inTable("filmes")
            .onDelete("cascade");
        
        table.string("user_id").notNullable();
        table
            .foreign("user_id")
            .references("user_id")
            .inTable("user")
            .onDelete("cascade");
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("filmesfav");
};
