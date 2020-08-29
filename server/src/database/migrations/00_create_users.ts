import Knex from 'knex';

// método up: são as alterações que queremos realizar no banco de dados
export async function up(knex: Knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.string('bio').notNullable();
    });
}

// método down: serve para desfazer as ações caso algo dê errado
export async function down(knex: Knex) {
    return knex.schema.dropTable('users');
}