import { Request, Response } from 'express';
import db from '../database/connection';

export default  class ConnectionsController {
    async index(request: Request, response: Response) {
        const totalConnections = await db('connections').count('* as total');

        const { total } = totalConnections[0];

        return response.json({ total });
    }
    
    // Criando a conexão entre Aluno e Professor
    async create(request: Request, response: Response) {
        const { user_id } = request.body; // Id vai vir dentro do request body

        await db('connections').insert({
            user_id, // insere na tabela de conexões, o id do usuario (professor) e o campo created_at vai pegar a data atual automaticamente
        });

        return response.status(201).send();
    }
}