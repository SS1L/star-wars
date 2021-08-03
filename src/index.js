import app from './app.js';
import dotenv from 'dotenv';

dotenv.config();
const port = parseInt(process.env.PORT, 10);

function startServer() {
  app.listen(port, () => {
    console.log('all work');
  });
}

startServer();
