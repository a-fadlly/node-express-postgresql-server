import { Router } from 'express';
import status from 'http-status';
import { ResponseBuilder } from '../helpers';
import models from '../models';
const { User } = models;

const router = Router();

router.get('/', async (req, res) => {

  const users = await User.findAll();

  return res.status(status.OK).json(new ResponseBuilder().setData(users).build());
});

router.get('/:userId', async (req, res) => {

  const user = await User.findByPk(
    req.params.userId,
  );

  return res.status(status.OK).json(new ResponseBuilder().setData(user).build());
});

router.post('/', async (req, res) => {

  const { username } = req.body;

  const user = await User.create({
    username
  });

  return res.status(status.CREATED).json(new ResponseBuilder().setData(user).build());
});

router.delete('/', async (req, res) => {

  const { username } = req.query;

  const user = await User.destroy({
    where: { username },
  });

  return res.status(status.OK).json(new ResponseBuilder().setData(user).build());
});

export default router;