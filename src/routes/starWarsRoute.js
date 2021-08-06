import express from 'express';
import * as starWars from '../controllers/starWarsController.js';

const router = express.Router();

router.get(
  '/people/:id',
  starWars.getPeople,
);
router.get('/planets/:id', starWars.getPlanet);

export default router;
