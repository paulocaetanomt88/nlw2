import cors from 'cors';
import express from 'express';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// App vai ouvir as requisições que o front-end enviar para o back-end
app.listen(3333);