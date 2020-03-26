import { Router } from 'express';

import { typeController } from '../controllers';

const router = Router();

router.get('/', async (req, res) => {
  typeController.get(req, res);
});

router.post('/', async (req, res) => {
  typeController.post(req, res);
});

router.delete('/', async (req, res) => {
  typeController.delete(req, res);
});

export default router;