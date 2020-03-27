import HTTPStatus from 'http-status';
import { ResponseBuilder } from '../helpers';
import models from '../models';
const { Priority } = models;

export default class PriorityController {

    async get(req, res) {
        try {
            const priorities = await Priority.findAll();
            return res.status(HTTPStatus.OK).json(
                new ResponseBuilder()
                    .setData(priorities)
                    .build()
            );
        } catch (error) {
            res.status(HTTPStatus.BAD_REQUEST).json(
                new ResponseBuilder()
                    .setMessage(error)
                    .setSuccess(false)
                    .build()
            );
        }
    }

    async post(req, res) {
        try {
            const { name } = req.body;
            const priority = await Priority.create({
                name,
            });
            return res.status(HTTPStatus.CREATED).json(
                new ResponseBuilder()
                    .setData(priority)
                    .build()
            );
        } catch (error) {
            res.status(HTTPStatus.BAD_REQUEST).json(
                new ResponseBuilder()
                    .setMessage(error)
                    .setSuccess(false)
                    .build()
            );
        }
    }

    async delete(req, res) {
        try {
            const { name } = req.query;
            await Priority.destroy({
                where: { name, },
            });
            return res.status(HTTPStatus.OK).json(
                new ResponseBuilder()
                    .setData({})
                    .build()
            );
        } catch (error) {
            res.status(HTTPStatus.BAD_REQUEST).json(
                new ResponseBuilder()
                    .setMessage(error)
                    .setSuccess(false)
                    .build()
            );
        }
    }
}