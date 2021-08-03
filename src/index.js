import app from './app.js';

function startServer() {
  app.listen(5000, () => {
    console.log('all work');
  });
}

startServer();
