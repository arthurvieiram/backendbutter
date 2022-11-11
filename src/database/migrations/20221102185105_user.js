exports.up = function(knex) {
  return knex.schema.createTable("user", function(table) {
    table.string("id").primary().notNullable();
    table.string("email").notNullable();
    table.string("senha").notNullable();
    table.string("nome").notNullable();
    table.string("idade").notNullable();
    table.string("endereco").notNullable();
    table.string("firebase_id").notNullable();
  });
};

exports.down = function(knex) {
    return knex.schema.dropTable("user");
};
