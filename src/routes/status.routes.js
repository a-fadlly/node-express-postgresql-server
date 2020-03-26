import { Router } from 'express';

import { statusController } from '../controllers';

const router = Router();

router.get('/', async (req, res) => {
  statusController.get(req, res);
});

router.post('/', async (req, res) => {
  statusController.post(req, res);
});

router.delete('/', async (req, res) => {
  statusController.delete(req, res);
});

export default router;