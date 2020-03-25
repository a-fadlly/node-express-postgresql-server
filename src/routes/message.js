import { Router } from 'express';
import models from '../models';
const { Message } = models;

const router = Router();

router.get('/', async (req, res) => {
  const messages = await Message.findAll();
  return res.send(messages);
});

router.get('/:messageId', async (req, res) => {
  const message = await Message.findByPk(
    req.params.messageId,
  );
  return res.send(message);
});

router.post('/', async (req, res) => {
  const message = await Message.create({
    text: req.body.text,
    userId: req.context.me.id,
  });

  return res.send(message);
});

router.delete('/:messageId', async (req, res) => {
  const result = await Message.destroy({
    where: { id: req.params.messageId },
  });

  return res.send(true);
});

export default router;
