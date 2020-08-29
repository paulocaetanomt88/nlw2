// Assistente de consultas SQL
import knex from 'knex';
// migrations - controlam a versão do banco de dados
// utilitário para os caminhos de diretórios dentro da aplicação
import path from 'path';


const db = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    // utilize um caminho Null quando não conseguir definir um caminho padrão para o banco de dados
    useNullAsDefault: true, 
});

export default db;