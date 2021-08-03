import express from 'express';
import peopleRoute from './routes/starWarsRoute.js';

const app = express();

app.use(express.json());
app.use('/', peopleRoute);

export default app;
