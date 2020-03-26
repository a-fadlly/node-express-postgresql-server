import HTTPStatus from 'http-status';
import { ResponseBuilder } from '../helpers';
import models from '../models';
const { Status } = models;

export default class StatusController {

    async get(req, res) {
        const statuses = await Status.findAll();
        return res.status(HTTPStatus.OK).json(new ResponseBuilder().setData(statuses).build());
    }

    async post(req, res) {
        const { name } = req.body;
        const status = await Status.create({
            name,
        });
        return res.status(HTTPStatus.CREATED).json(new ResponseBuilder().setData(status).build());
    }

    async delete(req, res) {
        const { name } = req.query;
        const status = await Status.destroy({
            where: { name, },
        });
        return res.status(HTTPStatus.OK).json(new ResponseBuilder().setData(status).build());
    }
}