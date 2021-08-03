import express from 'express';
import * as peopleController from '../controllers/peopleController.js';

const router = express.Router();

router.get('/', peopleController.getHello);

export default router;
