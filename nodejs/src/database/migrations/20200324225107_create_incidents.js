
exports.up = function(knex) {
  return knex.schema.createTable('incidents', function(table){
    table.increments();   // chave primária da tabela

    table.string('title').notNullable();
    table.string('description').notNullable();  // valores nulos não podem ser inseridos na tabela
    table.string('value').notNullable();
    
    table.string('ong_id').notNullable();
    table.foreign('ong_id').references('id').inTable('ongs');
  });
};

exports.down = function(knex) {
 return knex.schema.dropTable('incidents');
};
