import { Router } from 'express';
import models from '../models';

const { User } = models;

const router = Router();

router.get('/', async (req, res) => {
  const users = await User.findAll();
  return res.send(users);
});

router.get('/:userId', async (req, res) => {
  const user = await User.findByPk(
    req.params.userId,
  );
  return res.send(user);
});

export default router;
