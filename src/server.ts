import express from 'express';
import routes from './routes';

const server = express();

server.use(express.json());
server.use(routes);

server.listen(3001, () => console.log('Server running on port 3001'));