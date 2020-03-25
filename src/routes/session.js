import { Router } from 'express';
import models from '../models';

const { User } = models;

const router = Router();

router.get('/', async (req, res) => {
  const user = await User.findByPk(
    req.context.me.id,
  );
  return res.send(user);
});

export default router;
