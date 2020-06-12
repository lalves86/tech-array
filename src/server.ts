import express from 'express';

const server = express();

server.get('/', (request, response) => {
  return response.send('Hello Lucas');
});

server.listen(3001, () => console.log('Server running on port 3001'));