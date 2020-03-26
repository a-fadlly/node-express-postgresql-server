import { Router } from 'express';
import HTTPStatus from 'http-status';
import { ResponseBuilder } from '../helpers';
import models from '../models';
const { Type } = models;

const router = Router();

router.get('/', async (req, res) => {

  const types = await Type.findAll();

  return res.status(HTTPStatus.OK).json(new ResponseBuilder().setData(types).build());
});

router.post('/', async (req, res) => {

  const { name } = req.body;

  const type = await Type.create({
    name
  });

  return res.status(HTTPStatus.CREATED).json(new ResponseBuilder().setData(type).build());
});

router.delete('/', async (req, res) => {

  const { name } = req.query;

  const type = await Type.destroy({
    where: { name },
  });

  return res.status(HTTPStatus.OK).json(new ResponseBuilder().setData(type).build());
});

export default router;