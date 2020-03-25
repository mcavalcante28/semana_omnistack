
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table){
    table.string('id').primary();   // chave primária da tabela
    table.string('name').notNullable();
    table.string('email').notNullable();  // valores nulos não podem ser inseridos na tabela
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf',2).notNullable(); // limitando o tamanho da UF a 2 caracteres (RN,npES,SP...)

  });
};

exports.down = function(knex) {
 return knex.schema.dropTable('ongs');
};
