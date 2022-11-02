exports.up = function(knex) {
    return knex.schema.createTable("filmes", function(table) {
        table.string("filme_id").primary().notNullable();
        table.string("nome").notNullable();
        table.data("data").notNullable();
        table.string("diretor").notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("filmes");
};
