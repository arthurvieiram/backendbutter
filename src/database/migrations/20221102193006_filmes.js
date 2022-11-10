exports.up = function(knex) {
    return knex.schema.createTable("filmes", function(table) {
        table.string("id").primary().notNullable();
        table.string("nome").notNullable();
        table.string("data").notNullable();
        table.string("diretor").notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("filmes");
};
