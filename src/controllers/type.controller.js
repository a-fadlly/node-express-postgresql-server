import HTTPStatus from 'http-status';
import { ResponseBuilder } from '../helpers';
import models from '../models';
const { Type } = models;

export default class TypeController {

    async get(req, res) {
        try {
            const types = await Type.findAll();
            return res.status(HTTPStatus.OK).json(
                new ResponseBuilder()
                    .setData(types)
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
            const type = await Type.create({
                name,
            });
            return res.status(HTTPStatus.CREATED).json(
                new ResponseBuilder()
                    .setData(type)
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
            await Type.destroy({
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