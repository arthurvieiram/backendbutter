exports.up = function(knex) {
    return knex.schema.createTable("filmesfav", function(table) {
        //table.string("filmefav_id").primary().notNullable();
        table.string("filme_id").notNullable();
        table
            .foreign("filme_id")
            .references("id")
            .inTable("filmes")
            .onDelete("cascade");
        
        table.string("user_id").notNullable();
        table
            .foreign("user_id")
            .references("id")
            .inTable("user")
            .onDelete("cascade");
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("filmesfav");
};
