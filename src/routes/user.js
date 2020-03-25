import { Router } from 'express';
import { ResponseBuilder } from '../helpers';
import models from '../models';
const { User } = models;

const router = Router();

router.get('/', async (req, res) => {
  const users = await User.findAll();
  return res.json(new ResponseBuilder().setData(users).build());
});

router.get('/:userId', async (req, res) => {
  const user = await User.findByPk(
    req.params.userId,
  );
  return res.send(user);
});

router.post('/', async (req, res) => {
  const user = await User.create({
    username: req.body.username
  });

  return res.send(user);
});

export default router;
