import { Router } from 'express';
import HTTPStatus from 'http-status';
import { ResponseBuilder } from '../helpers';
import models from '../models';
const { Priority } = models;

const router = Router();

router.get('/', async (req, res) => {

  const priorities = await Priority.findAll();

  return res.status(HTTPStatus.OK).json(new ResponseBuilder().setData(priorities).build());
});

router.post('/', async (req, res) => {

  const { name } = req.body;

  const priority = await Priority.create({
    name
  });

  return res.status(HTTPStatus.CREATED).json(new ResponseBuilder().setData(priority).build());
});

router.delete('/', async (req, res) => {

  const { name } = req.query;

  const priority = await Priority.destroy({
    where: { name },
  });

  return res.status(HTTPStatus.OK).json(new ResponseBuilder().setData(priority).build());
});

export default router;
