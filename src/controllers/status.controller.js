import HTTPStatus from 'http-status';
import { ResponseBuilder } from '../helpers';
import models from '../models';
const { Status } = models;

export default class StatusController {

    async get(req, res) {
        try {
            const statuses = await Status.findAll();
            return res.status(HTTPStatus.OK).json(
                new ResponseBuilder()
                    .setData(statuses)
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
            const status = await Status.create({
                name,
            });
            return res.status(HTTPStatus.CREATED).json(
                new ResponseBuilder()
                    .setData(status)
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
            await Status.destroy({
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