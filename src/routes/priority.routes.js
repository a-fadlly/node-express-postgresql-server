import { Router } from 'express';

import { priorityController } from '../controllers';

const router = Router();

router.get('/', async (req, res) => {
  priorityController.get(req, res);
});

router.post('/', async (req, res) => {
  priorityController.post(req, res);
});

router.delete('/', async (req, res) => {
  priorityController.delete(req, res);
});

export default router;