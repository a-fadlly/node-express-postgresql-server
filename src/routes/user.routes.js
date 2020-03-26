import { Router } from 'express';

import { userController } from '../controllers';

const router = Router();

router.get('/', async (req, res) => {
  userController.get(req, res);
});

router.get('/:userId', async (req, res) => {
  userController.find(req, res);
});

router.post('/', async (req, res) => {
  userController.post(req, res);
});

router.delete('/', async (req, res) => {
  userController.delete(req, res);
});

export default router;
