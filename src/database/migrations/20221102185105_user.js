exports.up = function(knex) {
  return knex.schema.createTable("user", function(table) {
    table.string("user_id").primary().notNullable();
    table.string("user_nome").notNullable();
    table.string("idade").notNullable();
    table.string("email").notNullable();
    table.string("endereco").notNullable();
  });
};

exports.down = function(knex) {
    return knex.schema.dropTable("user");
};
