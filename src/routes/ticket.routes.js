import { Router } from 'express';

import { ticketController } from '../controllers';

const router = Router();

router.get('/', async (req, res) => {
    ticketController.get(req, res);
});

export default router;